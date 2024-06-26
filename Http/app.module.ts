import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'App/Infrastructure/Database/database.module';
import { TodoModule } from 'App/Application/Todo/todo.module';
import { UserModule } from 'App/Application/User/user.module';
import { Auth } from './Middlewares/auth';

@Module({
  imports: [
    TodoModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    Auth
  ],
})
export class AppModule { }
