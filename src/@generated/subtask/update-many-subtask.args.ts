import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtaskUpdateManyMutationInput } from './subtask-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubtaskWhereInput } from './subtask-where.input';

@ArgsType()
export class UpdateManySubtaskArgs {

    @Field(() => SubtaskUpdateManyMutationInput, {nullable:false})
    @Type(() => SubtaskUpdateManyMutationInput)
    data!: SubtaskUpdateManyMutationInput;

    @Field(() => SubtaskWhereInput, {nullable:true})
    @Type(() => SubtaskWhereInput)
    where?: SubtaskWhereInput;
}
