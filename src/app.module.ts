import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { LoggerMiddleWare } from "./common/middleware/logger.middleware";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { join } from "path";

import { AuthenticationModule } from './authentication/authentication.module';
import { SubtasksModule } from './subtasks/subtasks.module';
import { TasksModule } from "./tasks/tasks.module";
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      context: ({ req, res }) => ({ request: req, response: res }),
      cors: {
        credentials: true,
        origin: true,
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      // Execute enhancers at the field resolver level.
      // WARNING: could cause performance issues.
      // https://docs.nestjs.com/graphql/other-features#execute-enhancers-at-the-field-resolver-level
      // fieldResolverEnhancers: ['interceptors']
    }),
    UsersModule,
    TasksModule,
    AuthenticationModule,
    SubtasksModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes({
      path: "*",
      method: RequestMethod.HEAD,
    });
  }
}
