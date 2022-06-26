import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [TasksModule]
})
export class UsersModule { }
