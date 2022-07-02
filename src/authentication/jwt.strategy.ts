import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";

import * as jwtConstants from '../common/constants/jwt';

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

  async validate(payload) {
    return this.usersService.findOneById(payload.userId)
  }
}