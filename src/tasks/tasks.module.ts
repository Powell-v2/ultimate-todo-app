import { forwardRef, Module } from "@nestjs/common";
import { AttachmentsModule } from "src/attachments/attachments.module";
import { PrismaService } from "src/prisma.service";
import { SubtasksModule } from "src/subtasks/subtasks.module";
import { UsersModule } from "src/users/users.module";
import { TasksResolver } from "./tasks.resolver";
import { TasksService } from "./tasks.service";

@Module({
  providers: [TasksResolver, TasksService, PrismaService],
  exports: [TasksService],
  imports: [forwardRef(() => UsersModule), forwardRef(() => SubtasksModule), forwardRef(() => AttachmentsModule)],
})
export class TasksModule { }
