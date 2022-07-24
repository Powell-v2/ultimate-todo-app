import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTasksInput } from '../user/user-create-nested-one-without-tasks.input';
import { SubtaskCreateNestedManyWithoutTaskInput } from '../subtask/subtask-create-nested-many-without-task.input';

@InputType()
export class TaskCreateWithoutAttachmentsInput {

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

    @Field(() => UserCreateNestedOneWithoutTasksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutTasksInput;

    @Field(() => SubtaskCreateNestedManyWithoutTaskInput, {nullable:true})
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput;
}
