import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskCreateNestedManyWithoutTaskInput } from '../subtask/subtask-create-nested-many-without-task.input';
import { AttachmentCreateNestedManyWithoutTaskInput } from '../attachment/attachment-create-nested-many-without-task.input';

@InputType()
export class TaskCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    priority!: string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SubtaskCreateNestedManyWithoutTaskInput, {nullable:true})
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput;

    @Field(() => AttachmentCreateNestedManyWithoutTaskInput, {nullable:true})
    attachments?: AttachmentCreateNestedManyWithoutTaskInput;
}
