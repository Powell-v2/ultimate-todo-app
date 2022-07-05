import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutSubtasksInput } from './task-update-without-subtasks.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutSubtasksInput } from './task-create-without-subtasks.input';

@InputType()
export class TaskUpsertWithoutSubtasksInput {

    @Field(() => TaskUpdateWithoutSubtasksInput, {nullable:false})
    @Type(() => TaskUpdateWithoutSubtasksInput)
    update!: TaskUpdateWithoutSubtasksInput;

    @Field(() => TaskCreateWithoutSubtasksInput, {nullable:false})
    @Type(() => TaskCreateWithoutSubtasksInput)
    create!: TaskCreateWithoutSubtasksInput;
}
