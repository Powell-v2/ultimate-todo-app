import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateAttachmentInput } from './dto/create-attachment.input';

@Injectable()
export class AttachmentsService {
  constructor(private prisma: PrismaService) { }

  async findAll(args: Prisma.AttachmentFindManyArgs) {
    return this.prisma.attachment.findMany(args)
  }

  async findOne(args: Prisma.AttachmentFindUniqueArgs) {
    return this.prisma.attachment.findUnique(args)
  }

  async findOneById(id: number) {
    return this.prisma.attachment.findUnique({ where: { id } })
  }

  async create({ taskId, data }: { taskId: number, data: CreateAttachmentInput }) {
    return this.prisma.attachment.create({
      data: {
        ...data,
        task: {
          connect: { id: taskId },
        }
      }
    })
  }

  async delete(id: number) {
    return this.prisma.attachment.delete({ where: { id } })
  }
}
