import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { IS_PUBLIC_FIELD } from "src/common/decorators/public.decorator";

@Injectable()
export class JwtAuthenticationGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super()
  }

  canActivate(gqlContext: GqlExecutionContext) {
    const isPublicField = this.reflector.getAllAndOverride(IS_PUBLIC_FIELD, [
      gqlContext.getHandler(),
      gqlContext.getClass(),
    ])
    if (isPublicField) return true
    return super.canActivate(gqlContext)
  }
  getRequest(gqlContext: GqlExecutionContext) {
    const context = GqlExecutionContext.create(gqlContext)
    return context.getContext().req
  }
}