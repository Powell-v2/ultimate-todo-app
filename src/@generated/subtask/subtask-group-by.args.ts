import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtaskWhereInput } from './subtask-where.input';
import { Type } from 'class-transformer';
import { SubtaskOrderByWithAggregationInput } from './subtask-order-by-with-aggregation.input';
import { SubtaskScalarFieldEnum } from './subtask-scalar-field.enum';
import { SubtaskScalarWhereWithAggregatesInput } from './subtask-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubtaskCountAggregateInput } from './subtask-count-aggregate.input';
import { SubtaskAvgAggregateInput } from './subtask-avg-aggregate.input';
import { SubtaskSumAggregateInput } from './subtask-sum-aggregate.input';
import { SubtaskMinAggregateInput } from './subtask-min-aggregate.input';
import { SubtaskMaxAggregateInput } from './subtask-max-aggregate.input';

@ArgsType()
export class SubtaskGroupByArgs {

    @Field(() => SubtaskWhereInput, {nullable:true})
    @Type(() => SubtaskWhereInput)
    where?: SubtaskWhereInput;

    @Field(() => [SubtaskOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubtaskOrderByWithAggregationInput>;

    @Field(() => [SubtaskScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubtaskScalarFieldEnum>;

    @Field(() => SubtaskScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubtaskScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubtaskCountAggregateInput, {nullable:true})
    _count?: SubtaskCountAggregateInput;

    @Field(() => SubtaskAvgAggregateInput, {nullable:true})
    _avg?: SubtaskAvgAggregateInput;

    @Field(() => SubtaskSumAggregateInput, {nullable:true})
    _sum?: SubtaskSumAggregateInput;

    @Field(() => SubtaskMinAggregateInput, {nullable:true})
    _min?: SubtaskMinAggregateInput;

    @Field(() => SubtaskMaxAggregateInput, {nullable:true})
    _max?: SubtaskMaxAggregateInput;
}
