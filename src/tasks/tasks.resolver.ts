import { ForbiddenException, NotFoundException, ParseIntPipe } from '@nestjs/common'
import { Resolver, Query, Args, Mutation, Subscription, ResolveField, Parent } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import * as PrismaClient from "@prisma/client"

import { FindManyTaskArgs } from 'src/@generated/task/find-many-task.args'
import { TCurrentUser } from 'src/authentication/jwt.strategy'
import { Roles } from 'src/common/decorators/roles.decorator'
import { CurrentUser } from 'src/common/decorators/currentUser.decorator'
import { SubtasksService } from 'src/subtasks/subtasks.service'
import { Subtask } from 'src/subtasks/entities/subtask.entity'
import { ERole, User } from 'src/users/entities/user.entity'
import { UsersService } from 'src/users/users.service'

import { CreateTaskInput } from './dto/create-task.input'
import { UpdateTaskInput } from './dto/update-task.input'
import { Task } from './entities/task.entity'
import { TasksService } from './tasks.service'
import { Attachment } from 'src/attachments/entities/attachment.entity'
import { AttachmentsService } from 'src/attachments/attachments.service'

const pubsub = new PubSub()

@Resolver(of => Task)
export class TasksResolver {
  constructor(
    private readonly tasksService: TasksService,
    private readonly usersService: UsersService,
    private readonly subtasksService: SubtasksService,
    private readonly attachmentsService: AttachmentsService,
  ) { }

  @Roles(ERole.USER)
  @Query(() => Task)
  async task(@Args('id') id: number, @CurrentUser() currentUser: TCurrentUser) {
    const task = await this.tasksService.findOneById(id)

    if (!task) {
      throw new NotFoundException(`Task #${id} doesn't exist.`)
    }
    if (!currentUser.isAdmin && task.userId !== currentUser.id) {
      throw new ForbiddenException(`You are not allowed to access task #${id}.`)
    }

    return task
  }

  @Roles(ERole.USER)
  @Query(() => [Task])
  tasks(@Args() args: FindManyTaskArgs, @CurrentUser() currentUser: TCurrentUser) {
    if (currentUser.isAdmin) {
      return this.tasksService.findAll(args)
    }
    return this.tasksService.findAll({
      ...args,
      where: {
        ...args.where,
        userId: currentUser.id
      }
    })
  }

  @ResolveField('user', () => User)
  getTaskOwner(@Parent() task: PrismaClient.Task) {
    return this.usersService.findOneById(task.userId)
  }

  @ResolveField('subtasks', () => [Subtask])
  getSubtasks(@Parent() task: PrismaClient.Task) {
    return this.subtasksService.findAll({
      where: {
        taskId: task.id
      }
    })
  }

  @ResolveField('attachments', () => [Attachment])
  getAttachments(@Parent() task: PrismaClient.Task) {
    return this.attachmentsService.findAll({
      where: {
        taskId: task.id
      }
    })
  }

  @Roles(ERole.USER)
  @Mutation(() => Task)
  async addTask(
    @Args('userId') userId: number,
    @Args('data') data: CreateTaskInput,
    @CurrentUser() currentUser: TCurrentUser,
  ) {
    if (userId !== currentUser.id) {
      throw new ForbiddenException(`You are not allowed to create tasks for user #${userId}.`)
    }
    const newTask = await this.tasksService.create({ userId, data })

    pubsub.publish('TASK_ADDED', { newTask })

    return newTask
  }

  @Roles(ERole.USER)
  @Mutation(() => Task)
  async updateTask(
    @Args('id') id: number,
    @Args('data') data: UpdateTaskInput,
    @CurrentUser() currentUser: TCurrentUser,
  ) {
    if (!currentUser.isAdmin) {
      const task = await this.tasksService.findOneById(id)
      if (task.userId !== currentUser.id) {
        throw new ForbiddenException(`You are not allowed to access task #${id}.`)
      }
    }
    const updatedTask = await this.tasksService.update({ id, data })

    if (!updatedTask) {
      throw new NotFoundException(`Task #${id} doesn't exist.`)
    }

    return updatedTask
  }

  @Roles(ERole.USER)
  @Mutation(() => Boolean)
  async deleteTask(
    @Args('id') id: number,
    @CurrentUser() currentUser: TCurrentUser,
  ) {
    if (!currentUser.isAdmin) {
      const task = await this.tasksService.findOneById(id)
      if (task.userId !== currentUser.id) {
        throw new ForbiddenException(`You are not allowed to delete task #${id}.`)
      }
    }

    const deleted = await this.tasksService.delete(id)
    if (!deleted) {
      throw new NotFoundException(`Task #${id} doesn't exist.`)
    }
    return true
  }

  @Subscription(() => Task)
  taskAdded() {
    return pubsub.asyncIterator('TASK_ADDED')
  }
}
