import { Module } from '@nestjs/common';
import { AttachmentsModule } from 'src/attachments/attachments.module';

import { PrismaService } from 'src/prisma.service';
import { TasksModule } from 'src/tasks/tasks.module';
import { FilesResolver } from './files.resolver';

@Module({
  providers: [PrismaService, FilesResolver],
  imports: [TasksModule, AttachmentsModule]
})
export class FilesModule { }
