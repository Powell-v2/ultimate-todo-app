import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import helmet from "helmet";

import { AppModule } from "./app.module";

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  app.use(bodyParser.text())
  app.use(helmet())
  app.use(cookieParser())

  await app.listen(PORT)
  console.log(`Application is running 🏃💨  at: ${await app.getUrl()}`)
}

bootstrap();
