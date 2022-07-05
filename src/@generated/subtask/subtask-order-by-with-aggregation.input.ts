import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SubtaskCountOrderByAggregateInput } from './subtask-count-order-by-aggregate.input';
import { SubtaskAvgOrderByAggregateInput } from './subtask-avg-order-by-aggregate.input';
import { SubtaskMaxOrderByAggregateInput } from './subtask-max-order-by-aggregate.input';
import { SubtaskMinOrderByAggregateInput } from './subtask-min-order-by-aggregate.input';
import { SubtaskSumOrderByAggregateInput } from './subtask-sum-order-by-aggregate.input';

@InputType()
export class SubtaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priority?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SubtaskCountOrderByAggregateInput, {nullable:true})
    _count?: SubtaskCountOrderByAggregateInput;

    @Field(() => SubtaskAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubtaskAvgOrderByAggregateInput;

    @Field(() => SubtaskMaxOrderByAggregateInput, {nullable:true})
    _max?: SubtaskMaxOrderByAggregateInput;

    @Field(() => SubtaskMinOrderByAggregateInput, {nullable:true})
    _min?: SubtaskMinOrderByAggregateInput;

    @Field(() => SubtaskSumOrderByAggregateInput, {nullable:true})
    _sum?: SubtaskSumOrderByAggregateInput;
}
