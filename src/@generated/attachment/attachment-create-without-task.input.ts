import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AttachmentCreateWithoutTaskInput {

    @Field(() => String, {nullable:false})
    s3Key!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
