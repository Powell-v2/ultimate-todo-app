import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Subtask } from "./subtask.entity";

export enum EPriorities {
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
  P4 = "P4"
}

@ObjectType({ description: "task" })
export class Task {
  @Field((type) => ID)
  id: string;

  @Field()
  createdAt: Date;

  // @Directive('@upper')
  @Field()
  title: string;

  @Field()
  priority?: EPriorities

  // @Field(type => [Subtask], { nullable: true })
  // subtasks?: Subtask[]

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  dueDate?: Date;
}

