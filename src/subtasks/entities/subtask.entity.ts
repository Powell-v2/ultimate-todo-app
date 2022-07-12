import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Priority } from "src/tasks/entities/task.entity";

@ObjectType({ description: "subtask" })
export class Subtask {
  @Field((type) => ID)
  id: number

  @Field()
  title: string

  description?: string

  @Field(type => Priority)
  priority?: Priority

  dueDate?: Date

  createdAt: Date
}

