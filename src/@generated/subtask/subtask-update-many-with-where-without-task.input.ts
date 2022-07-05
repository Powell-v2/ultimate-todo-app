import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskScalarWhereInput } from './subtask-scalar-where.input';
import { Type } from 'class-transformer';
import { SubtaskUpdateManyMutationInput } from './subtask-update-many-mutation.input';

@InputType()
export class SubtaskUpdateManyWithWhereWithoutTaskInput {

    @Field(() => SubtaskScalarWhereInput, {nullable:false})
    @Type(() => SubtaskScalarWhereInput)
    where!: SubtaskScalarWhereInput;

    @Field(() => SubtaskUpdateManyMutationInput, {nullable:false})
    @Type(() => SubtaskUpdateManyMutationInput)
    data!: SubtaskUpdateManyMutationInput;
}
