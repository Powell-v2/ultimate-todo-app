import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttachmentCreateManyTaskInput } from './attachment-create-many-task.input';
import { Type } from 'class-transformer';

@InputType()
export class AttachmentCreateManyTaskInputEnvelope {

    @Field(() => [AttachmentCreateManyTaskInput], {nullable:false})
    @Type(() => AttachmentCreateManyTaskInput)
    data!: Array<AttachmentCreateManyTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
