import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Task } from 'src/tasks/entities/task.entity';

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  tasks?: Task[];
}