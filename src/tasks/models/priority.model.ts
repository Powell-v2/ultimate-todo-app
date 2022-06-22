import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "task priority" })
export class Priority {
  @Field((type) => ID)
  id: string;
}
