import { User as TUser } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User, Role as TRole } from "@prisma/client";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ERole } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";

import * as jwtConstants from '../common/constants/jwt';
import { ITokenPayload } from "./tokenPayload.interface";

export type TCurrentUser = TUser & {
  roles: ERole[],
  isAdmin: boolean
}

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

  async validate(payload: ITokenPayload): Promise<TCurrentUser> {
    const user = await this.usersService.findOne({
      where: { id: payload.userId },
      include: {
        roles: true
      }
    }) as User & { roles: TRole[] }
    const roles = user.roles.map(({ name }) => name) as ERole[]

    return {
      ...user,
      roles,
      isAdmin: roles.includes(ERole.ADMIN)
    }
  }
}