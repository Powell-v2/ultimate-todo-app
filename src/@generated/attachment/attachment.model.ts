import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Task } from '../task/task.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Attachment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    s3Key!: string;

    @Field(() => Task, {nullable:false})
    task?: Task;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
