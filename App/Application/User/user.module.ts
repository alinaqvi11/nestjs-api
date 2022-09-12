import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import { UserController } from '../../../Http/Controllers/user.controller';
import UserRepository from 'App/Infrastructure/MYSQL Respository/User/User.repository';
import EncryptionService from 'App/Infrastructure/Services/EncryptionService';

@Module({
    imports: [],
    providers: [UserService, UserRepository, EncryptionService],
    controllers: [UserController],
})

export class UserModule { }