import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TaskUpdateOneRequiredWithoutAttachmentsInput } from '../task/task-update-one-required-without-attachments.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class AttachmentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    s3Key?: StringFieldUpdateOperationsInput;

    @Field(() => TaskUpdateOneRequiredWithoutAttachmentsInput, {nullable:true})
    task?: TaskUpdateOneRequiredWithoutAttachmentsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
