import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import { UserController } from 'Http/Controllers/user.controller';
import UserRepository from 'App/Infrastructure/Database/User/User.repository';
import EncryptionService from 'App/Infrastructure/Services/Encryption/EncryptionService';
import { DatabaseModule } from 'App/Infrastructure/Database/database.module';


@Module({
    imports: [],
    providers: [UserService, EncryptionService, UserRepository],
    controllers: [UserController],
})

export class UserModule { }