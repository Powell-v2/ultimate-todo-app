import { CreateUserInput } from './create-user.input';
import { InputType, PartialType, PickType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PickType(PartialType(CreateUserInput), ['email', 'name']) { }
