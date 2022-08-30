import { Module } from '@nestjs/common';
import { UsersController } from './Controllers/user.controller';
import { UsersService } from '../App/Application/Users/user.service';
import { SequelizeModule } from "@nestjs/sequelize"
import User from 'App/Infrastructure/Model/user.model';
import { UsersModule } from 'App/Application/Users/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'App/Infrastructure/Database/dbProvider.module';

@Module({

  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: 'localhost',
    //   username: 'ali',
    //   password: 'ali',
    //   database: 'todoApp',
    //   models: [User],
    //   autoLoadModels: true,
    //   synchronize: true,
    // }),
    // UsersModule

  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class AppModule { }
