import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Priorities } from "src/tasks/entities/task.entity";

@ObjectType({ description: "subtask" })
export class Subtask {
  @Field((type) => ID)
  id: number

  @Field()
  title: string

  description?: string

  @Field(type => Priorities)
  priority?: Priorities

  dueDate?: Date

  createdAt: Date
}

