import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';
import { Type } from 'class-transformer';
import { AttachmentUpdateWithoutTaskInput } from './attachment-update-without-task.input';

@InputType()
export class AttachmentUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => AttachmentWhereUniqueInput, {nullable:false})
    @Type(() => AttachmentWhereUniqueInput)
    where!: AttachmentWhereUniqueInput;

    @Field(() => AttachmentUpdateWithoutTaskInput, {nullable:false})
    @Type(() => AttachmentUpdateWithoutTaskInput)
    data!: AttachmentUpdateWithoutTaskInput;
}
