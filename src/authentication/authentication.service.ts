import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email)
    if (user && bcrypt.compare(password, user.password)) {
      return user
    }
    return null
  }

  getJwtCookie(user: Omit<User, 'password'>) {
    const payload = { email: user.email, userId: user.id }
    const token = this.jwtService.sign(payload)
    return `JWT=${token}; HttpOnly; Path=/; Max-Age=1800`
  }

  getLogoutCookie() {
    return `JWT=; HttpOnly; Path=/; Max-Age=0`
  }
}
