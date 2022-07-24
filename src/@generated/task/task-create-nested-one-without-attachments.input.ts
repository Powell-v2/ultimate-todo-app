import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutAttachmentsInput } from './task-create-without-attachments.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutAttachmentsInput } from './task-create-or-connect-without-attachments.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutAttachmentsInput {

    @Field(() => TaskCreateWithoutAttachmentsInput, {nullable:true})
    @Type(() => TaskCreateWithoutAttachmentsInput)
    create?: TaskCreateWithoutAttachmentsInput;

    @Field(() => TaskCreateOrConnectWithoutAttachmentsInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutAttachmentsInput)
    connectOrCreate?: TaskCreateOrConnectWithoutAttachmentsInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;
}
