import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateSubtaskInput } from './dto/create-subtask.input';
import { UpdateSubaskInput } from './dto/update-subtask.input';
import { Subtask } from './entities/subtask.entity';
import { SubtasksService } from './subtasks.service';

@Resolver()
export class SubtasksResolver {
  constructor(
    private readonly subtasksService: SubtasksService
  ) { }

  @Mutation(() => Subtask)
  async addSubtask(
    @Args('taskId') taskId: number,
    @Args('data') data: CreateSubtaskInput
  ) {
    const newTask = await this.subtasksService.create({ taskId, data })
    return newTask
  }

  @Mutation(() => Subtask)
  async updateSubtask(
    @Args('id') id: number,
    @Args('data') data: UpdateSubaskInput
  ) {
    const updatedTask = await this.subtasksService.update({ id, data })

    if (!updatedTask) {
      throw new NotFoundException(`Subtask with ID ${id} doesn't exist.`)
    }

    return updatedTask
  }

  @Mutation(() => Boolean)
  async deleteSubtask(@Args('id') id: number) {
    const removedSuccessfully = await this.subtasksService.delete(id)
    if (!removedSuccessfully) {
      throw new NotFoundException(`Subtask with the ID ${id} doesn't exist.`)
    }
    return true
  }
}
