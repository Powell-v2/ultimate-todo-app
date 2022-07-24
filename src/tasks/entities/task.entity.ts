import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Attachment } from "src/attachments/entities/attachment.entity";
import { Subtask } from "src/subtasks/entities/subtask.entity";
import { User } from "src/users/entities/user.entity";

export enum Priority {
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
  P4 = "P4"
}

registerEnumType(Priority, {
  name: 'Priority', description: 'Task priority levels.', valuesMap: {
    [Priority.P4]: {
      description: 'Default priority level.'
    }
  }
})

@ObjectType({ description: "task" })
export class Task {
  @Field(type => ID)
  id: number

  title: string

  @Field(type => User)
  user: User

  createdAt: Date

  @Field(type => [Attachment])
  attachments?: Attachment[]

  @Field(type => Priority)
  priority?: Priority

  @Field(type => [Subtask], { nullable: true })
  subtasks?: Subtask[]

  description?: string

  dueDate?: Date

}

