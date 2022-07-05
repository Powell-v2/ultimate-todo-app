import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskWhereInput } from './subtask-where.input';

@InputType()
export class SubtaskListRelationFilter {

    @Field(() => SubtaskWhereInput, {nullable:true})
    every?: SubtaskWhereInput;

    @Field(() => SubtaskWhereInput, {nullable:true})
    some?: SubtaskWhereInput;

    @Field(() => SubtaskWhereInput, {nullable:true})
    none?: SubtaskWhereInput;
}
