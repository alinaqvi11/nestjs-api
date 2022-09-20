import { NestFactory } from '@nestjs/core';
import { AppModule } from 'Http/app.module';
import { RedisClient } from '../App/Infrastructure/Services/Redis/RedisClient';
import {logger} from 'App/Infrastructure/Logger/logger'


async function bootstrap() {
  RedisClient.start()
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  app.listen(port, () => {
    logger.info(`!!!!!!!!!!!!Server running on ${port}!!!!!!!!!!`)
  });
}
bootstrap();
