import { Field, ID, ObjectType } from "@nestjs/graphql";
import { EPriorities } from "./task.model";

@ObjectType({ description: "subtask" })
export class Subtask {
  @Field((type) => ID)
  id: string;
  createdAt: Date;
  title: string;
  priority?: EPriorities
  description?: string;
  dueDate?: Date;
}

