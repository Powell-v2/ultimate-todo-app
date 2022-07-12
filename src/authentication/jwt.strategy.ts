import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User, Role } from "@prisma/client";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";

import * as jwtConstants from '../common/constants/jwt';
import { ITokenPayload } from "./tokenPayload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => request?.cookies?.JWT
      ]),
      secretOrKey: jwtConstants.SECRET,
    })
  }

  async validate(payload: ITokenPayload) {
    const user = await this.usersService.findOne({
      where: { id: payload.userId },
      include: {
        roles: true
      }
    }) as User & { roles: { name: Role }[] }

    return {
      ...user,
      roles: user.roles.map(({ name }) => name)
    }
  }
}