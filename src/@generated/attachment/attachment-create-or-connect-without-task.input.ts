import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';
import { Type } from 'class-transformer';
import { AttachmentCreateWithoutTaskInput } from './attachment-create-without-task.input';

@InputType()
export class AttachmentCreateOrConnectWithoutTaskInput {

    @Field(() => AttachmentWhereUniqueInput, {nullable:false})
    @Type(() => AttachmentWhereUniqueInput)
    where!: AttachmentWhereUniqueInput;

    @Field(() => AttachmentCreateWithoutTaskInput, {nullable:false})
    @Type(() => AttachmentCreateWithoutTaskInput)
    create!: AttachmentCreateWithoutTaskInput;
}
