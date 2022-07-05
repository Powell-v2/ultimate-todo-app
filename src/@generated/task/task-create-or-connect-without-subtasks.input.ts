import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutSubtasksInput } from './task-create-without-subtasks.input';

@InputType()
export class TaskCreateOrConnectWithoutSubtasksInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutSubtasksInput, {nullable:false})
    @Type(() => TaskCreateWithoutSubtasksInput)
    create!: TaskCreateWithoutSubtasksInput;
}
