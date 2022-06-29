import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { TasksService } from 'src/tasks/tasks.service';
import { Task } from 'src/tasks/entities/task.entity';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly tasksService: TasksService,
  ) { }

  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args);
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id') id: number) {
    const user = await this.usersService.findOne(id)
    if (!user) {
      throw new NotFoundException(`User with ID ${id} doesn't exist.`)
    }
    return user
  }

  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    let newUser: User
    try {
      newUser = await this.usersService.create(payload);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ConflictException(`User with email ${payload.email} aleady exists.`)
        }
      }
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
