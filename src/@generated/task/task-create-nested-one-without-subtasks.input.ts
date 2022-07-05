import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutSubtasksInput } from './task-create-without-subtasks.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutSubtasksInput } from './task-create-or-connect-without-subtasks.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutSubtasksInput {

    @Field(() => TaskCreateWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskCreateWithoutSubtasksInput)
    create?: TaskCreateWithoutSubtasksInput;

    @Field(() => TaskCreateOrConnectWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutSubtasksInput)
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;
}
