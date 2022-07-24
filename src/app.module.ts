import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { SNSMiddleware } from "./common/middleware/sns.middleware";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { join } from "path";

import { AuthenticationModule } from './authentication/authentication.module';
import { SubtasksModule } from './subtasks/subtasks.module';
import { TasksModule } from "./tasks/tasks.module";
import { UsersModule } from './users/users.module';
import { AttachmentsModule } from "./attachments/attachments.module";
import { FilesModule } from "./files/files.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      csrfPrevention: true,
      transformSchema: (schema) => {
        // Apply transformations, such as middleware (graphql-shield)
        // or custom directives.
        return schema
      },
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
    AuthenticationModule,
    UsersModule,
    TasksModule,
    SubtasksModule,
    AttachmentsModule,
    FilesModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SNSMiddleware).forRoutes({
      path: "/webhooks",
      method: RequestMethod.POST,
    });
  }
}
