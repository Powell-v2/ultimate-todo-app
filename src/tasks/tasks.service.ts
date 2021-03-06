import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { CreateTaskInput } from "./dto/create-task.input";
import { Priority } from "./entities/task.entity";

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) { }

  async findAll(args: Prisma.TaskFindManyArgs) {
    return this.prisma.task.findMany(args)
  }

  async findOne(args: Prisma.TaskFindUniqueArgs) {
    return this.prisma.task.findUnique(args)
  }

  async findOneById(id: number) {
    return this.prisma.task.findUnique({ where: { id } })
  }

  async create({ userId, data }: { userId: number, data: CreateTaskInput }) {
    return this.prisma.task.create({
      data: {
        ...data,
        priority: data.priority || Priority.P4,
        user: {
          connect: {
            id: userId
          }
        },
      }
    })
  }

  async update({ id, data }: { id: number, data: Prisma.TaskUpdateInput }) {
    return this.prisma.task.update({ where: { id }, data })
  }

  async delete(id: number) {
    return this.prisma.task.delete({ where: { id } })
  }
}
