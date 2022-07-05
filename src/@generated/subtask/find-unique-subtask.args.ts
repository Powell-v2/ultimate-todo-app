import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSubtaskArgs {

    @Field(() => SubtaskWhereUniqueInput, {nullable:false})
    @Type(() => SubtaskWhereUniqueInput)
    where!: SubtaskWhereUniqueInput;
}
