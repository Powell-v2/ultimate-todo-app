import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';
import { Type } from 'class-transformer';
import { SubtaskUpdateWithoutTaskInput } from './subtask-update-without-task.input';
import { SubtaskCreateWithoutTaskInput } from './subtask-create-without-task.input';

@InputType()
export class SubtaskUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => SubtaskWhereUniqueInput, {nullable:false})
    @Type(() => SubtaskWhereUniqueInput)
    where!: SubtaskWhereUniqueInput;

    @Field(() => SubtaskUpdateWithoutTaskInput, {nullable:false})
    @Type(() => SubtaskUpdateWithoutTaskInput)
    update!: SubtaskUpdateWithoutTaskInput;

    @Field(() => SubtaskCreateWithoutTaskInput, {nullable:false})
    @Type(() => SubtaskCreateWithoutTaskInput)
    create!: SubtaskCreateWithoutTaskInput;
}
