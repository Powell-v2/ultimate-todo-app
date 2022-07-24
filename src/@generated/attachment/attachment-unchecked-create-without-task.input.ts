import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AttachmentUncheckedCreateWithoutTaskInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    s3Key!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
