import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, Length, MaxLength } from "class-validator";
import { Priorities } from "../entities/task.entity";

@InputType()
export class CreateTaskInput {
  @Length(1, 50)
  title: string;
  @Length(1, 255)
  @IsOptional()
  description?: string;
  dueDate?: Date;
  @Field({ defaultValue: Priorities.P4 })
  priority?: Priorities;
}
