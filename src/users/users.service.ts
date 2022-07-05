import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  findAll(args: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(args);
  }

  findOneById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findOneByRefreshToken(refreshToken: string, id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } })

    const match = await bcrypt.compare(
      refreshToken,
      user.refreshToken,
    )

    return match ? user : null
  }

  create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  update({ id, data }: { id: number, data: UpdateUserInput }) {
    return this.prisma.user.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  async setRefreshToken(refreshToken: string | null, userId: number) {
    let hashedRefreshToken: typeof refreshToken = null
    if (refreshToken) {
      hashedRefreshToken = await bcrypt.hash(refreshToken, 10)
    }
    return this.prisma.user.update({ where: { id: userId }, data: { refreshToken: hashedRefreshToken } });
  }
}
