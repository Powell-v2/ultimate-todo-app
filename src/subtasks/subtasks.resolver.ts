import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TCurrentUser } from 'src/authentication/jwt.strategy';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';

import { Roles } from 'src/common/decorators/roles.decorator';
import { TasksService } from 'src/tasks/tasks.service';
import { ERole } from 'src/users/entities/user.entity';

import { CreateSubtaskInput } from './dto/create-subtask.input';
import { UpdateSubaskInput } from './dto/update-subtask.input';
import { Subtask } from './entities/subtask.entity';
import { SubtasksService } from './subtasks.service';

@Resolver()
export class SubtasksResolver {
  constructor(
    private readonly subtasksService: SubtasksService,
    private readonly tasksService: TasksService
  ) { }

  @Roles(ERole.USER)
  @Mutation(() => Subtask)
  async addSubtask(
    @Args('taskId') taskId: number,
    @Args('data') data: CreateSubtaskInput,
    @CurrentUser() currentUser: TCurrentUser,
  ) {
    const task = await this.tasksService.findOneById(taskId)

    if (!task) {
      throw new NotFoundException(`Task #${taskId} doesn't exist.`)
    }
    if (!currentUser.isAdmin && currentUser.id !== task.userId) {
      throw new ForbiddenException(`You are not allowed to add subtasks to task #${taskId}.`)
    }

    return this.subtasksService.create({ taskId, data })
  }

  @Roles(ERole.USER)
  @Mutation(() => Subtask)
  async updateSubtask(
    @Args('id') id: number,
    @Args('data') data: UpdateSubaskInput,
    @CurrentUser() currentUser: TCurrentUser,
  ) {
    const subtask = await this.subtasksService.findOneById(id)

    if (!subtask) {
      throw new NotFoundException(`Subtask #${id} doesn't exist.`)
    }
    if (!currentUser.isAdmin) {
      const task = await this.tasksService.findOneById(subtask.taskId)

      if (task.userId !== currentUser.id) {
        throw new ForbiddenException(`You are not allowed to update subtask #${id}.`)
      }
    }

    return this.subtasksService.update({ id, data })
  }

  @Roles(ERole.USER)
  @Mutation(() => Boolean)
  async deleteSubtask(
    @Args('id') id: number,
    @CurrentUser() currentUser: TCurrentUser,
  ) {
    const subtask = await this.subtasksService.findOneById(id)

    if (!subtask) {
      throw new NotFoundException(`Subtask #${id} doesn't exist.`)
    }
    if (!currentUser.isAdmin) {
      const task = await this.tasksService.findOneById(subtask.taskId)

      if (task.userId !== currentUser.id) {
        throw new ForbiddenException(`You are not allowed to delete subtask #${id}.`)
      }
    }

    await this.subtasksService.delete(id)

    return true
  }
}
