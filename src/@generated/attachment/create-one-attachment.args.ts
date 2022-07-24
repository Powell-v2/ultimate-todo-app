import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttachmentCreateInput } from './attachment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAttachmentArgs {

    @Field(() => AttachmentCreateInput, {nullable:false})
    @Type(() => AttachmentCreateInput)
    data!: AttachmentCreateInput;
}
