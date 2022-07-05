import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Task } from '../task/task.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Subtask {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:false})
    priority!: string;

    @Field(() => Date, {nullable:true})
    dueDate!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Task, {nullable:false})
    task?: Task;

    @Field(() => Int, {nullable:false})
    taskId!: number;
}
