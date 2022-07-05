import { Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtRefreshGuard extends AuthGuard('jwt-refresh') {
  getRequest(gqlContext: GqlExecutionContext) {
    const context = GqlExecutionContext.create(gqlContext)
    return context.getContext().req
  }
}