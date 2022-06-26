import { NotFoundException } from '@nestjs/common'
import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'

import { CreateTaskInput } from './dto/create-task.input'
import { TasksArgs } from './dto/tasks.args';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';

const pubsub = new PubSub()

@Resolver(of => Task)
export class TasksResolver {
  constructor(private readonly taskService: TasksService) { }

  @Query(returns => Task)
  async task(@Args('id') id: string): Promise<Task> {
    const task = await this.taskService.findOneById(id)

    if (!task) {
      throw new NotFoundException(`Task with the ID ${id} doesn't exist.`)
    }

    return task
  }

  @Query(returns => [Task])
  tasks(@Args() args: TasksArgs): Promise<Task[]> {
    return this.taskService.findAll({ args })
  }

  @Mutation(returns => Task)
  async addTask(
    @Args('input') input: CreateTaskInput
  ): Promise<Task> {
    const newTask = await this.taskService.add(input)

    pubsub.publish('TASK_ADDED', { newTask })

    return newTask
  }

  @Mutation(returns => Task)
  async updateTask(
    @Args('input') input: UpdateTaskInput
  ): Promise<Task> {
    const updatedTask = await this.taskService.updateById(input)

    if (!updatedTask) {
      throw new NotFoundException(`Task with the ID ${input.id} doesn't exist.`)
    }

    return updatedTask
  }

  @Mutation(returns => Boolean)
  async deleteTask(@Args('id') id: string) {
    const success = await this.taskService.delete(id)

    if (!success) {
      console.log('EXCEPTION TIME');

      throw new NotFoundException(`Task with the ID ${id} doesn't exist.`)
    }
    return true
  }

  @Subscription(returns => Task)
  taskAdded() {
    return pubsub.asyncIterator('TASK_ADDED')
  }
}
