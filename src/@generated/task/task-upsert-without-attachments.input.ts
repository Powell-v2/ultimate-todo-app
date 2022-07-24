import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutAttachmentsInput } from './task-update-without-attachments.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutAttachmentsInput } from './task-create-without-attachments.input';

@InputType()
export class TaskUpsertWithoutAttachmentsInput {

    @Field(() => TaskUpdateWithoutAttachmentsInput, {nullable:false})
    @Type(() => TaskUpdateWithoutAttachmentsInput)
    update!: TaskUpdateWithoutAttachmentsInput;

    @Field(() => TaskCreateWithoutAttachmentsInput, {nullable:false})
    @Type(() => TaskCreateWithoutAttachmentsInput)
    create!: TaskCreateWithoutAttachmentsInput;
}
