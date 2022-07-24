import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentCreateWithoutTaskInput } from './attachment-create-without-task.input';
import { Type } from 'class-transformer';
import { AttachmentCreateOrConnectWithoutTaskInput } from './attachment-create-or-connect-without-task.input';
import { AttachmentUpsertWithWhereUniqueWithoutTaskInput } from './attachment-upsert-with-where-unique-without-task.input';
import { AttachmentCreateManyTaskInputEnvelope } from './attachment-create-many-task-input-envelope.input';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';
import { AttachmentUpdateWithWhereUniqueWithoutTaskInput } from './attachment-update-with-where-unique-without-task.input';
import { AttachmentUpdateManyWithWhereWithoutTaskInput } from './attachment-update-many-with-where-without-task.input';
import { AttachmentScalarWhereInput } from './attachment-scalar-where.input';

@InputType()
export class AttachmentUncheckedUpdateManyWithoutTaskInput {

    @Field(() => [AttachmentCreateWithoutTaskInput], {nullable:true})
    @Type(() => AttachmentCreateWithoutTaskInput)
    create?: Array<AttachmentCreateWithoutTaskInput>;

    @Field(() => [AttachmentCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => AttachmentCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<AttachmentCreateOrConnectWithoutTaskInput>;

    @Field(() => [AttachmentUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => AttachmentUpsertWithWhereUniqueWithoutTaskInput)
    upsert?: Array<AttachmentUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => AttachmentCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => AttachmentCreateManyTaskInputEnvelope)
    createMany?: AttachmentCreateManyTaskInputEnvelope;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    set?: Array<AttachmentWhereUniqueInput>;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    disconnect?: Array<AttachmentWhereUniqueInput>;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    delete?: Array<AttachmentWhereUniqueInput>;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    connect?: Array<AttachmentWhereUniqueInput>;

    @Field(() => [AttachmentUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => AttachmentUpdateWithWhereUniqueWithoutTaskInput)
    update?: Array<AttachmentUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [AttachmentUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    @Type(() => AttachmentUpdateManyWithWhereWithoutTaskInput)
    updateMany?: Array<AttachmentUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [AttachmentScalarWhereInput], {nullable:true})
    @Type(() => AttachmentScalarWhereInput)
    deleteMany?: Array<AttachmentScalarWhereInput>;
}
