import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubtaskUncheckedCreateNestedManyWithoutTaskInput } from '../subtask/subtask-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateWithoutUserInput {

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

    @Field(() => SubtaskUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput;
}
