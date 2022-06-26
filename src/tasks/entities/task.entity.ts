import { Directive, Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";

export enum Priorities {
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
  P4 = "P4"
}

registerEnumType(Priorities, { name: 'Priorities', description: 'Task priority levels.', valuesMap: {
  [Priorities.P4]: {
    description: 'Default priority level.'
  }
} })

@ObjectType({ description: "task" })
export class Task {
  @Field((type) => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  title: string;

  @Field(type => Priorities)
  priority?: Priorities

  // @Field(type => [Subtask], { nullable: true })
  // subtasks?: Subtask[]

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  dueDate?: Date;
}

