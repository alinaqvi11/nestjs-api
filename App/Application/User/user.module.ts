import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from '../../../Http/Controllers/user.controller';
import UserRepository from 'App/Infrastructure/MYSQL Respository/User/user.repository';
import { userProvider } from 'App/Infrastructure/MYSQL Respository/User/user.repoProvider';

@Module({
    imports: [],
    providers: [UserService, ...userProvider],
    controllers: [UserController],
    // exports: [UserService],
})

export class UserModule { }