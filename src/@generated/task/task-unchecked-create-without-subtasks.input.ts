import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AttachmentUncheckedCreateNestedManyWithoutTaskInput } from '../attachment/attachment-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateWithoutSubtasksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => AttachmentUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput;
}
