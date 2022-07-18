import { User as TUser } from "@prisma/client";
import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ERole } from "src/users/entities/user.entity";

export const CurrentUser = createParamDecorator(
  (data: unknown, gqlContext: GqlExecutionContext) => {
    const context = GqlExecutionContext.create(gqlContext)
    return context.getContext().request.user
  }
)