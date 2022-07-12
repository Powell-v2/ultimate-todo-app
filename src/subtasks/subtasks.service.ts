import { Injectable } from '@nestjs/common';
import { FindManySubtaskArgs } from 'src/@generated/subtask/find-many-subtask.args';
import { PrismaService } from 'src/prisma.service';
import { Priority } from 'src/tasks/entities/task.entity';
import { CreateSubtaskInput } from './dto/create-subtask.input';
import { UpdateSubaskInput } from './dto/update-subtask.input';

@Injectable()
export class SubtasksService {
  constructor(private prisma: PrismaService) { }

  async findAll(args: FindManySubtaskArgs) {
    return this.prisma.subtask.findMany(args)
  }

  async create({ taskId, data }: { taskId: number, data: CreateSubtaskInput }) {
    return this.prisma.subtask.create({
      data: {
        ...data,
        priority: data.priority || Priority.P4,
        task: {
          connect: {
            id: taskId
          }
        },
      }
    })
  }

  async update({ id, data }: { id: number, data: UpdateSubaskInput }) {
    return this.prisma.subtask.update({ where: { id }, data })
  }

  async delete(id: number) {
    return this.prisma.subtask.delete({ where: { id } })
  }
}
