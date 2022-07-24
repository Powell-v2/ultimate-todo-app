import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttachmentUpdateInput } from './attachment-update.input';
import { Type } from 'class-transformer';
import { AttachmentWhereUniqueInput } from './attachment-where-unique.input';

@ArgsType()
export class UpdateOneAttachmentArgs {

    @Field(() => AttachmentUpdateInput, {nullable:false})
    @Type(() => AttachmentUpdateInput)
    data!: AttachmentUpdateInput;

    @Field(() => AttachmentWhereUniqueInput, {nullable:false})
    @Type(() => AttachmentWhereUniqueInput)
    where!: AttachmentWhereUniqueInput;
}
