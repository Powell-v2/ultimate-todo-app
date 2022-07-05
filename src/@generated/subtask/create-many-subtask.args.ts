import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtaskCreateManyInput } from './subtask-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubtaskArgs {

    @Field(() => [SubtaskCreateManyInput], {nullable:false})
    @Type(() => SubtaskCreateManyInput)
    data!: Array<SubtaskCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
