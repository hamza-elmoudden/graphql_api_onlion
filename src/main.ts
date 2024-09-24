import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'body-parser';
import * as graphqlUplodExpress from "graphql-upload/graphqlUploadExpress.js"
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '100mb' }));

  app.use(urlencoded({ extended: true, limit: '100mb' }));

  app.use(
    "/graphql",
    graphqlUplodExpress({maxFileSize:"100kb",maxFiles:10})
    )

  const configService = app.get(ConfigService);
  const allowedOrigin = configService.get<string>('ALLOWED_ORIGIN')
  
    app.enableCors({
      origin: [allowedOrigin], // List of allowed origins
      methods: 'GET,POST,DELETE,PUT,PATCH', // Allowed methods
      allowedHeaders: 'Content-Type, Authorization,Accept', // Allowed headers
      credentials: true,
    });
  
  await app.listen(3000);
}
bootstrap();


