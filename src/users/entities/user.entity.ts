import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Task } from 'src/tasks/entities/task.entity';

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}

registerEnumType(Role, {
  name: 'Role', description: 'User access roles.', valuesMap: {
    [Role.USER]: {
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
  @Field(type => [Role])
  roles: Role[]
  createdAt: Date;
  tasks?: Task[];
}