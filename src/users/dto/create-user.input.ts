import { InputType, Field, ID } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
}
