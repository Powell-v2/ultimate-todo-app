import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { EPriorities } from "./task.model";

@ObjectType({ description: "subtask" })
export class Subtask {
  @Field((type) => ID)
  id: string;

  @Field()
  creationDate: Date;

  // @Directive('@upper')
  @Field()
  title: string;

  @Field()
  priority?: EPriorities

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  dueDate?: Date;
}

