import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, Length, MaxLength } from "class-validator";
import { EPriorities } from "../entities/task.entity";

@InputType()
export class CreateTaskInput {
  @IsNotEmpty()
  @MaxLength(50)
  title: string;
  @Length(1, 255)
  description?: string;
  dueDate?: Date;
  @Field({ defaultValue: EPriorities.P4 })
  priority?: EPriorities;
}
