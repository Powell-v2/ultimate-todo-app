import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskCreateWithoutTaskInput } from './subtask-create-without-task.input';
import { Type } from 'class-transformer';
import { SubtaskCreateOrConnectWithoutTaskInput } from './subtask-create-or-connect-without-task.input';
import { SubtaskUpsertWithWhereUniqueWithoutTaskInput } from './subtask-upsert-with-where-unique-without-task.input';
import { SubtaskCreateManyTaskInputEnvelope } from './subtask-create-many-task-input-envelope.input';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';
import { SubtaskUpdateWithWhereUniqueWithoutTaskInput } from './subtask-update-with-where-unique-without-task.input';
import { SubtaskUpdateManyWithWhereWithoutTaskInput } from './subtask-update-many-with-where-without-task.input';
import { SubtaskScalarWhereInput } from './subtask-scalar-where.input';

@InputType()
export class SubtaskUncheckedUpdateManyWithoutTaskInput {

    @Field(() => [SubtaskCreateWithoutTaskInput], {nullable:true})
    @Type(() => SubtaskCreateWithoutTaskInput)
    create?: Array<SubtaskCreateWithoutTaskInput>;

    @Field(() => [SubtaskCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => SubtaskCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<SubtaskCreateOrConnectWithoutTaskInput>;

    @Field(() => [SubtaskUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => SubtaskUpsertWithWhereUniqueWithoutTaskInput)
    upsert?: Array<SubtaskUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => SubtaskCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => SubtaskCreateManyTaskInputEnvelope)
    createMany?: SubtaskCreateManyTaskInputEnvelope;

    @Field(() => [SubtaskWhereUniqueInput], {nullable:true})
    @Type(() => SubtaskWhereUniqueInput)
    set?: Array<SubtaskWhereUniqueInput>;

    @Field(() => [SubtaskWhereUniqueInput], {nullable:true})
    @Type(() => SubtaskWhereUniqueInput)
    disconnect?: Array<SubtaskWhereUniqueInput>;

    @Field(() => [SubtaskWhereUniqueInput], {nullable:true})
    @Type(() => SubtaskWhereUniqueInput)
    delete?: Array<SubtaskWhereUniqueInput>;

    @Field(() => [SubtaskWhereUniqueInput], {nullable:true})
    @Type(() => SubtaskWhereUniqueInput)
    connect?: Array<SubtaskWhereUniqueInput>;

    @Field(() => [SubtaskUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => SubtaskUpdateWithWhereUniqueWithoutTaskInput)
    update?: Array<SubtaskUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [SubtaskUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    @Type(() => SubtaskUpdateManyWithWhereWithoutTaskInput)
    updateMany?: Array<SubtaskUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [SubtaskScalarWhereInput], {nullable:true})
    @Type(() => SubtaskScalarWhereInput)
    deleteMany?: Array<SubtaskScalarWhereInput>;
}
