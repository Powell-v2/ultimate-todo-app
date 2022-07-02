import * as bcrypt from 'bcrypt'
import { NotFoundException, ConflictException, InternalServerErrorException, UseGuards, Request, UseInterceptors } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, ResolveField, Parent, Context, GraphQLExecutionContext } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { TasksService } from 'src/tasks/tasks.service';
import { Task } from 'src/tasks/entities/task.entity';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';

import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { Response } from 'express';
import { Public } from 'src/common/decorators/public.decorator';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly tasksService: TasksService,
    private readonly authenticationService: AuthenticationService,
  ) { }

  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args);
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id') id: number, @CurrentUser() currentUser) {
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
    context.response.setHeader('Set-Cookie', jwtCookie)
    return user
  }

  @Mutation(() => Boolean)
  async logout(
    @Context() context: { response: Response }
  ) {
    const logoutCookie = this.authenticationService.getLogoutCookie()
    context.response.setHeader('Set-Cookie', logoutCookie)
    return true
  }

  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    let newUser
    const hashedPassword = await bcrypt.hash(payload.password, 10)
    try {
      const { password, ...rest } = await this.usersService.create({ ...payload, password: hashedPassword })
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

  @Mutation(() => User)
  async removeUser(@Args('id') id: number) {
    const removedSuccessfully = await this.usersService.remove(id)
    if (!removedSuccessfully) {
      throw new NotFoundException(`User with ID ${id} doesn't exist.`)
    }
    return removedSuccessfully
  }

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
}
