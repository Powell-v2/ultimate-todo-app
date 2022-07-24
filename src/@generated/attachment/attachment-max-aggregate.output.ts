import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AttachmentMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    s3Key?: string;

    @Field(() => Int, {nullable:true})
    taskId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
