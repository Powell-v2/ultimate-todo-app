import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AttachmentScalarWhereWithAggregatesInput {

    @Field(() => [AttachmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AttachmentScalarWhereWithAggregatesInput>;

    @Field(() => [AttachmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AttachmentScalarWhereWithAggregatesInput>;

    @Field(() => [AttachmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AttachmentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    s3Key?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    taskId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
