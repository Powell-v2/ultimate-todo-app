import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';
import { Type } from 'class-transformer';
import { SubtaskCreateWithoutTaskInput } from './subtask-create-without-task.input';

@InputType()
export class SubtaskCreateOrConnectWithoutTaskInput {

    @Field(() => SubtaskWhereUniqueInput, {nullable:false})
    @Type(() => SubtaskWhereUniqueInput)
    where!: SubtaskWhereUniqueInput;

    @Field(() => SubtaskCreateWithoutTaskInput, {nullable:false})
    @Type(() => SubtaskCreateWithoutTaskInput)
    create!: SubtaskCreateWithoutTaskInput;
}
