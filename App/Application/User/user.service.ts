import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import UserRepository from "App/Infrastructure/MYSQL Respository/User/user.repository"
import { v4 as uuid } from 'uuid';
import EncryptionService from "App/Infrastructure/Services/EncryptionService";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor() { }

    async login(email, password) {
        const user = await UserRepository.fetchUser(email);
        if (!user) {
            throw new HttpException('No user exist', HttpStatus.NOT_FOUND)
        }
        const comparedPassword = await EncryptionService.comaparePassword(password, user.password)
        if (user && comparedPassword) {
            return user;
        }
        throw new HttpException('Invalid Email or Password', HttpStatus.BAD_REQUEST)
    }

    async createUser(body) {
        const userBody = body;
        const alreadyExist = await UserRepository.fetchUser(body.email)
        if (alreadyExist) {
            throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST)
        }
        userBody.id = uuid();
        const password = await EncryptionService.hashPassword(body.password);
        userBody.password = password;
        const user = await UserRepository.createUser(userBody);
        if (user) {
            throw new HttpException('user created successfully', HttpStatus.CREATED)
        }
        throw new HttpException('user not created', HttpStatus.BAD_REQUEST)
    }
}