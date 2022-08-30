import { NestFactory } from '@nestjs/core';
import { AppModule } from '../Http/app.module';
import { Logger } from '@nestjs/common';
import { databaseProviders } from '../App/Infrastructure/Database/database.providers'
import * as dotenv from 'dotenv';
dotenv.config()

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule,
    {
      logger: ['error', 'warn', 'log'],
    });
  app.setGlobalPrefix('api/v1');
  app.enableCors();


  await app.init()
  await app.listen(port, () => {
    Logger.log(`!!!!!!!!!!!!Server running on ${port}!!!!!!!!!!`)
  });
}
bootstrap();
