import { Field, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { User } from "src/users/entities/user.entity";

export enum Priorities {
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
  P4 = "P4"
}

registerEnumType(Priorities, {
  name: 'Priorities', description: 'Task priority levels.', valuesMap: {
    [Priorities.P4]: {
      description: 'Default priority level.'
    }
  }
})

@ObjectType({ description: "task" })
export class Task {
  @Field((type) => ID)
  id: number

  @Field()
  createdAt: Date

  title: string

  @Field(type => User)
  user: User

  userId: number

  @Field(type => Priorities)
  priority?: Priorities

  description?: string

  dueDate?: Date
}

