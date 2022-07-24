import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateAttachmentInput {
  s3Key: string;
}
