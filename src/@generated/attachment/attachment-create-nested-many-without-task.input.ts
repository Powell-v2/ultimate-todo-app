import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentCreateWithoutTaskInput } from './attachment-create-without-task.input';
import { Type } from 'class-transformer';
import { AttachmentCreateOrConnectWithoutTaskInput } from './attachment-create-or-connect-without-task.input';
import { AttachmentCreateManyTaskInputEnvelope } from './attachment-create-many-task-input-envelope.input';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';

@InputType()
export class AttachmentCreateNestedManyWithoutTaskInput {

    @Field(() => [AttachmentCreateWithoutTaskInput], {nullable:true})
    @Type(() => AttachmentCreateWithoutTaskInput)
    create?: Array<AttachmentCreateWithoutTaskInput>;

    @Field(() => [AttachmentCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => AttachmentCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<AttachmentCreateOrConnectWithoutTaskInput>;

    @Field(() => AttachmentCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => AttachmentCreateManyTaskInputEnvelope)
    createMany?: AttachmentCreateManyTaskInputEnvelope;

    @Field(() => [AttachmentWhereUniqueInput], {nullable:true})
    @Type(() => AttachmentWhereUniqueInput)
    connect?: Array<AttachmentWhereUniqueInput>;
}
