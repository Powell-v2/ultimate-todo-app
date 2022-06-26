import { ObjectType, Field } from '@nestjs/graphql';
import { Task } from 'src/tasks/models/task.model';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  createdAt: Date;

  @Field(type => [Task], { nullable: true })
  tasks: Task[];
}