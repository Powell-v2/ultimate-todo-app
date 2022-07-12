import { CanActivate, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { GqlExecutionContext } from "@nestjs/graphql"
import { Observable } from "rxjs"
import { Role } from "src/users/entities/user.entity"
import { ROLES_KEY } from "../decorators/roles.decorator"

function matchRoles(userRoles: Role[], requiredRoles: Role[]) {
  return requiredRoles.every((requiredRole) => userRoles.find((role) => role === requiredRole))
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(
    gqlContext: GqlExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const context = GqlExecutionContext.create(gqlContext)

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY,
      [gqlContext.getHandler(), gqlContext.getClass()]
    )

    if (!requiredRoles) return true

    const { user } = context.getContext().request

    return matchRoles(user.roles, requiredRoles)
  }
}
