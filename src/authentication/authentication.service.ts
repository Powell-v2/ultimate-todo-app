import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

import * as jwtConstants from '../common/constants/jwt'
import { ITokenPayload } from './tokenPayload.interface';

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

  getJwtCookie(user: User) {
    const payload = { email: user.email, userId: user.id }
    const token = this.jwtService.sign(payload)
    return `JWT=${token}; HttpOnly; Path=/; Max-Age=${parseInt(jwtConstants.EXPIRES_IN, 10)}`
  }

  getJwtRefreshCookie(user: User) {
    const payload: ITokenPayload = { email: user.email, userId: user.id }
    const token = this.jwtService.sign(payload, {
      secret: jwtConstants.REFRESH_SECRET,
      expiresIn: jwtConstants.REFRESH_EXPIRES_IN,
    })
    return {
      token,
      cookie: `JWT_REFRESH=${token}; HttpOnly; Path=/; Max-Age=${parseInt(jwtConstants.REFRESH_EXPIRES_IN, 10)}`
    }
  }

  getLogoutCookies() {
    return [
      `JWT=; HttpOnly; Path=/; Max-Age=0`,
      `JWT_REFRESH=; HttpOnly; Path=/; Max-Age=0`,
    ]
  }
}
