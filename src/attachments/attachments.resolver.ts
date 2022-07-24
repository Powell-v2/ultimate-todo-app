import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TCurrentUser } from 'src/authentication/jwt.strategy';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';

import { Roles } from 'src/common/decorators/roles.decorator';
import { TasksService } from 'src/tasks/tasks.service';
import { ERole } from 'src/users/entities/user.entity';

import { AttachmentsService } from './attachments.service';
import { CreateAttachmentInput } from './dto/create-attachment.input';
import { Attachment } from './entities/attachment.entity';

@Resolver()
export class AttachmentsResolver {
  constructor(
    private readonly attachmentsService: AttachmentsService,
    private readonly tasksService: TasksService
  ) { }

  @Roles(ERole.USER)
  @Mutation(() => Attachment)
  async addAttachment(
    @Args('taskId') taskId: number,
    @Args('data') data: CreateAttachmentInput,
    @CurrentUser() currentUser: TCurrentUser,
  ) {
    const task = await this.tasksService.findOneById(taskId)

    if (!task) {
      throw new NotFoundException(`Task #${taskId} doesn't exist.`)
    }
    if (!currentUser.isAdmin && currentUser.id !== task.userId) {
      throw new ForbiddenException(`You are not allowed to add attachments to task #${taskId}.`)
    }

    return this.attachmentsService.create({ taskId, data })
  }

  @Roles(ERole.USER)
  @Mutation(() => Boolean)
  async deleteAttachment(
    @Args('id') id: number,
    @CurrentUser() currentUser: TCurrentUser,
  ) {
    const attachment = await this.attachmentsService.findOneById(id)

    if (!attachment) {
      throw new NotFoundException(`Attachment #${id} doesn't exist.`)
    }
    if (!currentUser.isAdmin) {
      const task = await this.tasksService.findOneById(attachment.taskId)

      if (task.userId !== currentUser.id) {
        throw new ForbiddenException(`You are not allowed to delete attachment #${id}.`)
      }
    }

    await this.attachmentsService.delete(id)

    return true
  }
}
