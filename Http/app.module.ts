import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'App/Infrastructure/Database/database.module';
import { Auth } from './Middlewares/auth';
import { TodoController } from './Controllers/todo.controller';
import { UserController } from './Controllers/user.controller';
import { ApplicationModule } from 'App/Application/application.module';

@Module({
  imports: [
    ApplicationModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    Auth
  ],
  controllers: [TodoController,UserController],

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
          .apply(Auth)
          .forRoutes(TodoController);
  }
}
