import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtaskWhereInput } from './subtask-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySubtaskArgs {

    @Field(() => SubtaskWhereInput, {nullable:true})
    @Type(() => SubtaskWhereInput)
    where?: SubtaskWhereInput;
}
