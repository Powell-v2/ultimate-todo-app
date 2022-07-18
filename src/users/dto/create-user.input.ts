import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, ArrayUnique, ArrayMinSize, ArrayMaxSize, IsOptional } from 'class-validator';
import { ERole } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  name: string
  @IsEmail()
  email: string
  password: string
  @IsOptional()
  @ArrayUnique()
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  roles?: ERole[]
}
