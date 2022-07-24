import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttachmentUpdateManyMutationInput } from './attachment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AttachmentWhereInput } from './attachment-where.input';

@ArgsType()
export class UpdateManyAttachmentArgs {

    @Field(() => AttachmentUpdateManyMutationInput, {nullable:false})
    @Type(() => AttachmentUpdateManyMutationInput)
    data!: AttachmentUpdateManyMutationInput;

    @Field(() => AttachmentWhereInput, {nullable:true})
    @Type(() => AttachmentWhereInput)
    where?: AttachmentWhereInput;
}
