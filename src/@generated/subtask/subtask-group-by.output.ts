import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubtaskCountAggregate } from './subtask-count-aggregate.output';
import { SubtaskAvgAggregate } from './subtask-avg-aggregate.output';
import { SubtaskSumAggregate } from './subtask-sum-aggregate.output';
import { SubtaskMinAggregate } from './subtask-min-aggregate.output';
import { SubtaskMaxAggregate } from './subtask-max-aggregate.output';

@ObjectType()
export class SubtaskGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    priority!: string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => SubtaskCountAggregate, {nullable:true})
    _count?: SubtaskCountAggregate;

    @Field(() => SubtaskAvgAggregate, {nullable:true})
    _avg?: SubtaskAvgAggregate;

    @Field(() => SubtaskSumAggregate, {nullable:true})
    _sum?: SubtaskSumAggregate;

    @Field(() => SubtaskMinAggregate, {nullable:true})
    _min?: SubtaskMinAggregate;

    @Field(() => SubtaskMaxAggregate, {nullable:true})
    _max?: SubtaskMaxAggregate;
}
