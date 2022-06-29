import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TasksModule } from 'src/tasks/tasks.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
  exports: [UsersService],
  imports: [forwardRef(() => TasksModule)],
})
export class UsersModule { }
