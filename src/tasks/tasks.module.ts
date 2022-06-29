import { forwardRef, Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { UsersModule } from "src/users/users.module";
import { TasksResolver } from "./tasks.resolver";
import { TasksService } from "./tasks.service";

@Module({
  providers: [TasksResolver, TasksService, PrismaService],
  exports: [TasksService],
  imports: [forwardRef(() => UsersModule)],
})
export class TasksModule { }
