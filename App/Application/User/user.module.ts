import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from '../../../Http/Controllers/user.controller';

@Module({
    imports: [],
    providers: [UserService],
    controllers: [UserController],
})

export class UserModule { }