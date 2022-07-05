import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskCreateWithoutTaskInput } from './subtask-create-without-task.input';
import { Type } from 'class-transformer';
import { SubtaskCreateOrConnectWithoutTaskInput } from './subtask-create-or-connect-without-task.input';
import { SubtaskCreateManyTaskInputEnvelope } from './subtask-create-many-task-input-envelope.input';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';

@InputType()
export class SubtaskUncheckedCreateNestedManyWithoutTaskInput {

    @Field(() => [SubtaskCreateWithoutTaskInput], {nullable:true})
    @Type(() => SubtaskCreateWithoutTaskInput)
    create?: Array<SubtaskCreateWithoutTaskInput>;

    @Field(() => [SubtaskCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => SubtaskCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<SubtaskCreateOrConnectWithoutTaskInput>;

    @Field(() => SubtaskCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => SubtaskCreateManyTaskInputEnvelope)
    createMany?: SubtaskCreateManyTaskInputEnvelope;

    @Field(() => [SubtaskWhereUniqueInput], {nullable:true})
    @Type(() => SubtaskWhereUniqueInput)
    connect?: Array<SubtaskWhereUniqueInput>;
}
