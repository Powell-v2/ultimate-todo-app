import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AttachmentsService } from './attachments.service';
import { AttachmentsResolver } from './attachments.resolver';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  providers: [AttachmentsService, PrismaService, AttachmentsResolver],
  exports: [AttachmentsService],
  imports: [forwardRef(() => TasksModule)]
})
export class AttachmentsModule { }
