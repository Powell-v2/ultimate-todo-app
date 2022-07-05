import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';
import { Type } from 'class-transformer';
import { SubtaskCreateInput } from './subtask-create.input';
import { SubtaskUpdateInput } from './subtask-update.input';

@ArgsType()
export class UpsertOneSubtaskArgs {

    @Field(() => SubtaskWhereUniqueInput, {nullable:false})
    @Type(() => SubtaskWhereUniqueInput)
    where!: SubtaskWhereUniqueInput;

    @Field(() => SubtaskCreateInput, {nullable:false})
    @Type(() => SubtaskCreateInput)
    create!: SubtaskCreateInput;

    @Field(() => SubtaskUpdateInput, {nullable:false})
    @Type(() => SubtaskUpdateInput)
    update!: SubtaskUpdateInput;
}
