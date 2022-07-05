import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';

@InputType()
export class SubtaskWhereInput {

    @Field(() => [SubtaskWhereInput], {nullable:true})
    AND?: Array<SubtaskWhereInput>;

    @Field(() => [SubtaskWhereInput], {nullable:true})
    OR?: Array<SubtaskWhereInput>;

    @Field(() => [SubtaskWhereInput], {nullable:true})
    NOT?: Array<SubtaskWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    priority?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dueDate?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;
}
