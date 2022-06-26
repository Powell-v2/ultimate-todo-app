import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  id: string;
  name: string;
  email: string;
}
