import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttachmentCreateManyInput } from './attachment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAttachmentArgs {

    @Field(() => [AttachmentCreateManyInput], {nullable:false})
    @Type(() => AttachmentCreateManyInput)
    data!: Array<AttachmentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
