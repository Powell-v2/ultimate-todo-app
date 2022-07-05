import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";

import * as jwtConstants from '../common/constants/jwt';
import { ITokenPayload } from "./tokenPayload.interface";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private readonly usersService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => request?.cookies?.JWT_REFRESH
      ]),
      secretOrKey: jwtConstants.REFRESH_SECRET,
      passReqToCallback: true,
    })
  }

  async validate(request: Request, payload: ITokenPayload) {
    const refreshToken = request?.cookies?.JWT_REFRESH
    return this.usersService.findOneByRefreshToken(refreshToken, payload.userId)
  }
}