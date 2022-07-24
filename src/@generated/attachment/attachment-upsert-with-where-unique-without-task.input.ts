import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';
import { Type } from 'class-transformer';
import { AttachmentUpdateWithoutTaskInput } from './attachment-update-without-task.input';
import { AttachmentCreateWithoutTaskInput } from './attachment-create-without-task.input';

@InputType()
export class AttachmentUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => AttachmentWhereUniqueInput, {nullable:false})
    @Type(() => AttachmentWhereUniqueInput)
    where!: AttachmentWhereUniqueInput;

    @Field(() => AttachmentUpdateWithoutTaskInput, {nullable:false})
    @Type(() => AttachmentUpdateWithoutTaskInput)
    update!: AttachmentUpdateWithoutTaskInput;

    @Field(() => AttachmentCreateWithoutTaskInput, {nullable:false})
    @Type(() => AttachmentCreateWithoutTaskInput)
    create!: AttachmentCreateWithoutTaskInput;
}
