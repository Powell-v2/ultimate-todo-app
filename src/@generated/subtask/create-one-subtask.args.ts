import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtaskCreateInput } from './subtask-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubtaskArgs {

    @Field(() => SubtaskCreateInput, {nullable:false})
    @Type(() => SubtaskCreateInput)
    data!: SubtaskCreateInput;
}
