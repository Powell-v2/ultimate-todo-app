import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length } from "class-validator";
import { Priority } from "../entities/task.entity";

@InputType()
export class CreateTaskInput {
  @Length(1, 50)
  title: string;
  @Length(1, 255)
  @IsOptional()
  description?: string;
  dueDate?: Date;
  @Field({ defaultValue: Priority.P4 })
  priority?: Priority;
}
