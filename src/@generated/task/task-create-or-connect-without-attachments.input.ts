import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutAttachmentsInput } from './task-create-without-attachments.input';

@InputType()
export class TaskCreateOrConnectWithoutAttachmentsInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutAttachmentsInput, {nullable:false})
    @Type(() => TaskCreateWithoutAttachmentsInput)
    create!: TaskCreateWithoutAttachmentsInput;
}
