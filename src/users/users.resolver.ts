import * as bcrypt from 'bcrypt'
import { NotFoundException, ConflictException, InternalServerErrorException, UseGuards, ForbiddenException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, ResolveField, Parent, Context } from '@nestjs/graphql';
import { Prisma, User as TUser } from '@prisma/client';
import { TasksService } from 'src/tasks/tasks.service';
import { Task } from 'src/tasks/entities/task.entity';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';

import { UsersService } from './users.service';
import { Role, User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { Response } from 'express';
import { Public } from 'src/common/decorators/public.decorator';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';
import { JwtRefreshGuard } from 'src/authentication/jwt-refresh.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { PrismaService } from 'src/prisma.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly tasksService: TasksService,
    private readonly authenticationService: AuthenticationService,
    private readonly prisma: PrismaService,
  ) { }

  @Roles(Role.ADMIN)
  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args)
  }

  @Roles(Role.USER)
  @Query(() => User, { name: 'user' })
  async findOne(@Args('id') id: number, @CurrentUser() currentUser: User) {
    if (id !== currentUser.id) {
      throw new ForbiddenException('You are not allowed to access this resource.')
    }
    const user = await this.usersService.findOneById(id)
    if (!user) {
      throw new NotFoundException(`User with ID ${id} doesn't exist.`)
    }
    return user
  }

  @Roles(Role.USER)
  @Query(() => User, { name: 'me' })
  async findCurrentUser(@CurrentUser() currentUser: User) {
    const { id } = currentUser
    const user = await this.usersService.findOneById(id)
    if (!user) {
      throw new NotFoundException(`User with ID ${id} doesn't exist.`)
    }
    return user
  }

  @Public()
  @Mutation(() => User)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() context: { response: Response }
  ) {
    const user = await this.authenticationService.validateUser(email, password)

    const jwtCookie = this.authenticationService.getJwtCookie(user)
    const { token: jwtRefreshToken, cookie: jwtRefreshCookie } = this.authenticationService.getJwtRefreshCookie(user)
    context.response.setHeader('Set-Cookie', [jwtCookie, jwtRefreshCookie])

    await this.usersService.setRefreshToken(jwtRefreshToken, user.id)

    return user
  }

  @Roles(Role.USER)
  @Mutation(() => Boolean)
  async logout(
    @CurrentUser() currentUser: TUser,
    @Context() context: { response: Response }
  ) {
    const logoutCookies = this.authenticationService.getLogoutCookies()
    context.response.setHeader('Set-Cookie', logoutCookies)

    await this.usersService.setRefreshToken(null, currentUser.id)

    return true
  }

  @Roles(Role.USER)
  @UseGuards(JwtRefreshGuard)
  @Mutation(() => Boolean)
  async refreshToken(
    @CurrentUser() currentUser: TUser,
    @Context() context: { response: Response }
  ) {
    const jwtCookie = this.authenticationService.getJwtCookie(currentUser)
    context.response.setHeader('Set-Cookie', jwtCookie)
    return true
  }

  @Roles(Role.ADMIN)
  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    let newUser
    const hashedPassword = await bcrypt.hash(payload.password, 10)

    try {
      const { password, ...rest } = await this.usersService.create({
        ...payload,
        password: hashedPassword,
        roles: {
          connect: payload.roles
            ? payload.roles.map((role) => ({ name: role }))
            : { name: Role.USER }
        }
      })
      newUser = rest
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ConflictException(`User with email ${payload.email} aleady exists.`)
        }
      }
      throw new InternalServerErrorException(error, 'Something went wrong');
    }
    return newUser
  }

  @Roles(Role.ADMIN)
  @Mutation(() => User)
  async updateUser(
    @Args('id') id: number,
    @Args('data') data: UpdateUserInput
  ) {
    const updatedUser = await this.usersService.update({ id, data })
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} doesn't exist.`)
    }
    return updatedUser
  }

  @Roles(Role.ADMIN)
  @Mutation(() => User)
  async removeUser(@Args('id') id: number) {
    const removedSuccessfully = await this.usersService.remove(id)
    if (!removedSuccessfully) {
      throw new NotFoundException(`User with ID ${id} doesn't exist.`)
    }
    return removedSuccessfully
  }

  @Roles(Role.USER)
  @ResolveField('tasks', () => [Task])
  getTasks(@Parent() user: User) {
    return this.tasksService.findAll({
      where: {
        userId: {
          equals: user.id
        }
      }
    })
  }

  @Roles(Role.USER)
  @ResolveField('roles', () => [Role])
  async getRoles(@Parent() user: User) {
    const roles = await this.prisma.role.findMany({
      where: {
        User: {
          some: {
            id: {
              equals: user.id
            }
          }
        }
      }
    })

    return roles.map(({ name }) => name)
  }
}
