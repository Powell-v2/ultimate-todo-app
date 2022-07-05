import { NotFoundException, ParseIntPipe } from '@nestjs/common'
import { Resolver, Query, Args, Mutation, Subscription, Int, ResolveField, Parent } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { Task as TTask } from "@prisma/client"

import { FindManyTaskArgs } from 'src/@generated/task/find-many-task.args'
import { User } from 'src/users/entities/user.entity'
import { UsersService } from 'src/users/users.service'
import { CreateTaskInput } from './dto/create-task.input'
import { UpdateTaskInput } from './dto/update-task.input'
import { Task } from './entities/task.entity'
import { TasksService } from './tasks.service'
import { SubtasksService } from 'src/subtasks/subtasks.service'
import { Subtask } from 'src/subtasks/entities/subtask.entity'

const pubsub = new PubSub()

@Resolver(of => Task)
export class TasksResolver {
  constructor(
    private readonly tasksService: TasksService,
    private readonly usersService: UsersService,
    private readonly subtasksService: SubtasksService,
  ) { }

  @Query(() => Task)
  async task(@Args('id') id: number) {
    const task = await this.tasksService.findOne(id)
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} doesn't exist.`)
    }
    return task
  }

  @Query(() => [Task])
  tasks(@Args() args: FindManyTaskArgs) {
    return this.tasksService.findAll(args)
  }

  @ResolveField('user', () => User)
  getTaskOwner(@Parent() task: TTask) {
    return this.usersService.findOneById(task.userId)
  }

  @ResolveField('subtasks', () => [Subtask])
  getSubtasks(@Parent() task: TTask) {
    return this.subtasksService.findAll({
      where: {
        taskId: { equals: task.id }
      }
    })
  }

  @Mutation(() => Task)
  async addTask(
    @Args('userId') userId: number,
    @Args('data') data: CreateTaskInput
  ) {
    const newTask = await this.tasksService.create({ userId, data })

    pubsub.publish('TASK_ADDED', { newTask })

    return newTask
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('id') id: number,
    @Args('data') data: UpdateTaskInput
  ) {
    const updatedTask = await this.tasksService.update({ id, data })

    if (!updatedTask) {
      throw new NotFoundException(`Task with ID ${id} doesn't exist.`)
    }

    return updatedTask
  }

  @Mutation(() => Boolean)
  async deleteTask(@Args('id', ParseIntPipe) id: number) {
    const removedSuccessfully = await this.tasksService.delete(id)
    if (!removedSuccessfully) {
      throw new NotFoundException(`Task with the ID ${id} doesn't exist.`)
    }
    return true
  }

  @Subscription(() => Task)
  taskAdded() {
    return pubsub.asyncIterator('TASK_ADDED')
  }
}
