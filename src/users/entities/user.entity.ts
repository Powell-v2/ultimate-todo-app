import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Task } from 'src/tasks/entities/task.entity';

export enum ERole {
  USER = "USER",
  ADMIN = "ADMIN"
}

registerEnumType(ERole, {
  name: 'Role', description: 'User access roles.', valuesMap: {
    [ERole.USER]: {
      description: 'Default role.'
    }
  }
})

@ObjectType()
export class User {
  @Field(type => ID)
  id: number;
  name: string;
  email: string;
  @Field(type => [ERole])
  roles: ERole[]
  createdAt: Date;
  tasks?: Task[];
}