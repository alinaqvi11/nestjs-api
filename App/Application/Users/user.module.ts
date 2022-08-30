import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from '../../../Http/Controllers/user.controller';
import User from '../../Infrastructure/Model/user.model';
import { SequelizeModule } from "@nestjs/sequelize"
import UserRepoProviders from "../../Infrastructure/MYSQL Respository/User/user.repoProvider"

@Module({
    // SequelizeModule.forFeature([User])
    imports: [],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [SequelizeModule]
})

export class UsersModule { }