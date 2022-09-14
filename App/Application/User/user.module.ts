import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import { UserController } from 'Http/Controllers/user.controller';
import UserRepository from 'App/Infrastructure/MYSQLRespository/User/User.repository';
import EncryptionService from 'App/Infrastructure/Services/Encryption/EncryptionService';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
    imports: [JwtModule.register({
        // secret: 'secretKey',
        // signOptions: { expiresIn: '60m' },
    })],
    providers: [UserService, UserRepository, EncryptionService,],
    controllers: [UserController],
    exports: [UserRepository]
})

export class UserModule { }