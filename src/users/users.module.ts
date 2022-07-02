import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TasksModule } from 'src/tasks/tasks.module';
import { PrismaService } from 'src/prisma.service';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
  exports: [UsersService],
  imports: [forwardRef(() => TasksModule), forwardRef(() => AuthenticationModule)],
})
export class UsersModule { }
