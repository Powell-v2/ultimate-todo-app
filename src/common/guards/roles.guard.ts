import { CanActivate, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { GqlExecutionContext } from "@nestjs/graphql"
import { Observable } from "rxjs"
import { ERole } from "src/users/entities/user.entity"
import { IS_PUBLIC_FIELD } from "../decorators/public.decorator"
import { ROLES_KEY } from "../decorators/roles.decorator"

function matchRoles(userRoles: ERole[], requiredRoles: ERole[]) {
  return requiredRoles.every((requiredRole) => userRoles.find((role) => role === requiredRole))
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(
    gqlContext: GqlExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const context = GqlExecutionContext.create(gqlContext)

    const isPublicField = this.reflector.getAllAndOverride(IS_PUBLIC_FIELD, [
      gqlContext.getHandler(),
      gqlContext.getClass(),
    ])
    if (isPublicField) return true

    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(
      ROLES_KEY,
      [gqlContext.getHandler(), gqlContext.getClass()]
    )
    if (!requiredRoles) return false

    const { user } = context.getContext().request
    return matchRoles(user.roles, requiredRoles)
  }
}
