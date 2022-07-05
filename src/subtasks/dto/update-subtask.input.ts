import { InputType, PartialType } from "@nestjs/graphql";
import { CreateSubtaskInput } from "./create-subtask.input";

@InputType()
export class UpdateSubaskInput extends PartialType(CreateSubtaskInput) { }
