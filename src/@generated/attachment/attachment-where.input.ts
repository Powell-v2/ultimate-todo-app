import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AttachmentWhereInput {

    @Field(() => [AttachmentWhereInput], {nullable:true})
    AND?: Array<AttachmentWhereInput>;

    @Field(() => [AttachmentWhereInput], {nullable:true})
    OR?: Array<AttachmentWhereInput>;

    @Field(() => [AttachmentWhereInput], {nullable:true})
    NOT?: Array<AttachmentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    s3Key?: StringFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
