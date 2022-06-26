import { Field, ID, ObjectType } from "@nestjs/graphql";
import { EPriorities } from "./task.entity";

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

