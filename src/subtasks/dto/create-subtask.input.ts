import { InputType } from "@nestjs/graphql";
import { CreateTaskInput } from "src/tasks/dto/create-task.input";

@InputType()
export class CreateSubtaskInput extends CreateTaskInput { }
