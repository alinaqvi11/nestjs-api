import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import UserRepository from "App/Infrastructure/MYSQL Respository/User/user.repository"
import { v4 as uuid } from 'uuid';
import EncryptionService from "App/Infrastructure/Services/EncryptionService";
import User from "App/Infrastructure/Model/user.model";
import { IUserRepository } from "App/Domain/Core/User/IUserRepository";

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) { }

    async login(email, password) {
        const user = await this.userRepository.fetchUser(email);
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
        const alreadyExist = await this.userRepository.fetchUser(body.email)
        if (alreadyExist) {
            throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST)
        }
        userBody.id = uuid();
        const password = await EncryptionService.hashPassword(body.password);
        userBody.password = password;
        const user = await this.userRepository.createUser(userBody);
        if (user) {
            return {
                status: 201,
                message: 'user created successfully'
            }
        }
        throw new HttpException('user not created', HttpStatus.BAD_REQUEST)
    }
}