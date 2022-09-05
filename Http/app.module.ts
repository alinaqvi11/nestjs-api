import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'App/Infrastructure/Database/dbProvider.module';
import { TodoModule } from 'App/Application/Todo/todo.module'

@Module({

  imports: [
    TodoModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
  ],
})
export class AppModule { }
