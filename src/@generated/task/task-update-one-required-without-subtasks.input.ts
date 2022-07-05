import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutSubtasksInput } from './task-create-without-subtasks.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutSubtasksInput } from './task-create-or-connect-without-subtasks.input';
import { TaskUpsertWithoutSubtasksInput } from './task-upsert-without-subtasks.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutSubtasksInput } from './task-update-without-subtasks.input';

@InputType()
export class TaskUpdateOneRequiredWithoutSubtasksInput {

    @Field(() => TaskCreateWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskCreateWithoutSubtasksInput)
    create?: TaskCreateWithoutSubtasksInput;

    @Field(() => TaskCreateOrConnectWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutSubtasksInput)
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput;

    @Field(() => TaskUpsertWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskUpsertWithoutSubtasksInput)
    upsert?: TaskUpsertWithoutSubtasksInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskUpdateWithoutSubtasksInput)
    update?: TaskUpdateWithoutSubtasksInput;
}
