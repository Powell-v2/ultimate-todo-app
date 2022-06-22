import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";
import { Subtask } from "../models/subtask.model";
import { EPriorities } from "../models/task.model";

@InputType()
export class NewTaskInput {
  @Field()
  @MaxLength(50)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(1, 255)
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  dueDate?: Date;

  @Field({ defaultValue: EPriorities.P4, })
  @IsOptional()
  priority?: EPriorities;

  // @Field(type => [Subtask], { nullable: true })
  // @IsOptional()
  // subtasks?: Subtask[]
}
