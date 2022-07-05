import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtaskUpdateInput } from './subtask-update.input';
import { Type } from 'class-transformer';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';

@ArgsType()
export class UpdateOneSubtaskArgs {

    @Field(() => SubtaskUpdateInput, {nullable:false})
    @Type(() => SubtaskUpdateInput)
    data!: SubtaskUpdateInput;

    @Field(() => SubtaskWhereUniqueInput, {nullable:false})
    @Type(() => SubtaskWhereUniqueInput)
    where!: SubtaskWhereUniqueInput;
}
