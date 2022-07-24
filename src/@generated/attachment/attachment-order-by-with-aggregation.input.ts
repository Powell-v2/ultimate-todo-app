import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AttachmentCountOrderByAggregateInput } from './attachment-count-order-by-aggregate.input';
import { AttachmentAvgOrderByAggregateInput } from './attachment-avg-order-by-aggregate.input';
import { AttachmentMaxOrderByAggregateInput } from './attachment-max-order-by-aggregate.input';
import { AttachmentMinOrderByAggregateInput } from './attachment-min-order-by-aggregate.input';
import { AttachmentSumOrderByAggregateInput } from './attachment-sum-order-by-aggregate.input';

@InputType()
export class AttachmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    s3Key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => AttachmentCountOrderByAggregateInput, {nullable:true})
    _count?: AttachmentCountOrderByAggregateInput;

    @Field(() => AttachmentAvgOrderByAggregateInput, {nullable:true})
    _avg?: AttachmentAvgOrderByAggregateInput;

    @Field(() => AttachmentMaxOrderByAggregateInput, {nullable:true})
    _max?: AttachmentMaxOrderByAggregateInput;

    @Field(() => AttachmentMinOrderByAggregateInput, {nullable:true})
    _min?: AttachmentMinOrderByAggregateInput;

    @Field(() => AttachmentSumOrderByAggregateInput, {nullable:true})
    _sum?: AttachmentSumOrderByAggregateInput;
}
