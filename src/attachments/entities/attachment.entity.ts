import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "attachment" })
export class Attachment {
  @Field((type) => ID)
  id: number
  s3Key: string
  createdAt: Date
}

