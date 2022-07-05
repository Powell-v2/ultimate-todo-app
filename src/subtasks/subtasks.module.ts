import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SubtasksService } from './subtasks.service';
import { SubtasksResolver } from './subtasks.resolver';

@Module({
  providers: [SubtasksService, PrismaService, SubtasksResolver],
  exports: [SubtasksService],
})
export class SubtasksModule { }
