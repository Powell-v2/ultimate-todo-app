import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";
import { EPriorities } from "../entities/task.model";

@InputType()
export class CreateTaskInput {
  @MaxLength(50)
  title: string;
  @Length(1, 255)
  description?: string;
  dueDate?: Date;
  @Field({ defaultValue: EPriorities.P4, })
  priority?: EPriorities;
}
