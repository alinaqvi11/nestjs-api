import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from '../../../Http/Controllers/user.controller';
import { SequelizeModule } from "@nestjs/sequelize"

@Module({
    imports: [],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [SequelizeModule]
})

export class UsersModule { }