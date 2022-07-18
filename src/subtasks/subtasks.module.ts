import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SubtasksService } from './subtasks.service';
import { SubtasksResolver } from './subtasks.resolver';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  providers: [SubtasksService, PrismaService, SubtasksResolver],
  exports: [SubtasksService],
  imports: [forwardRef(() => TasksModule)]
})
export class SubtasksModule { }
