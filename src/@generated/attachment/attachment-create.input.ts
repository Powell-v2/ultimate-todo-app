import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutAttachmentsInput } from '../task/task-create-nested-one-without-attachments.input';

@InputType()
export class AttachmentCreateInput {

    @Field(() => String, {nullable:false})
    s3Key!: string;

    @Field(() => TaskCreateNestedOneWithoutAttachmentsInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutAttachmentsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
