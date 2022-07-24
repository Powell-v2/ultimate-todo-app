import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutAttachmentsInput } from './task-create-without-attachments.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutAttachmentsInput } from './task-create-or-connect-without-attachments.input';
import { TaskUpsertWithoutAttachmentsInput } from './task-upsert-without-attachments.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutAttachmentsInput } from './task-update-without-attachments.input';

@InputType()
export class TaskUpdateOneWithoutAttachmentsInput {

    @Field(() => TaskCreateWithoutAttachmentsInput, {nullable:true})
    @Type(() => TaskCreateWithoutAttachmentsInput)
    create?: TaskCreateWithoutAttachmentsInput;

    @Field(() => TaskCreateOrConnectWithoutAttachmentsInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutAttachmentsInput)
    connectOrCreate?: TaskCreateOrConnectWithoutAttachmentsInput;

    @Field(() => TaskUpsertWithoutAttachmentsInput, {nullable:true})
    @Type(() => TaskUpsertWithoutAttachmentsInput)
    upsert?: TaskUpsertWithoutAttachmentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutAttachmentsInput, {nullable:true})
    @Type(() => TaskUpdateWithoutAttachmentsInput)
    update?: TaskUpdateWithoutAttachmentsInput;
}
