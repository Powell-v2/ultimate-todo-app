import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";
import { EPriorities } from "../models/task.model";

@InputType()
export class UpdateTaskInput {
  @Field()
  id: string;

  @Field()
  @MaxLength(50)
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(1, 255)
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  dueDate?: Date;

  @Field()
  @IsOptional()
  priority?: EPriorities;
}
