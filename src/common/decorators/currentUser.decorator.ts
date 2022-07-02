import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const CurrentUser = createParamDecorator(
  (data: unknown, gqlContext: GqlExecutionContext) => {
    const context = GqlExecutionContext.create(gqlContext)
    return context.getContext().request.user
  }
)