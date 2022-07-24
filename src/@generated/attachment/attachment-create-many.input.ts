import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AttachmentCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    s3Key!: string;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
