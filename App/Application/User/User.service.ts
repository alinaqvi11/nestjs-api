import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import UserRepository from "App/Infrastructure/Database/User/User.repository"
import { v4 as uuid } from 'uuid';
import EncryptionService from "App/Infrastructure/Services/Encryption/EncryptionService";
import HttpResponse from "Http/Utils/HttpResponse";
import UserEntity from "App/Domain/Core/User/User.entity";
import * as jwt from 'jsonwebtoken'
import { IUserRepository } from "App/Domain/Core/User/IUserRepository";

@Injectable()
export class UserService  {
    constructor(@Inject('IUserRepository') private userRepository: IUserRepository, private encryptionService: EncryptionService) { }

    async login(email: string, password: string) {
        const user = await this.userRepository.fetchUser(email);
        if (!user) {
            throw new HttpException('No user exist', HttpStatus.NOT_FOUND)
        }
        const comparedPassword = await this.encryptionService.comparedPassword(password, user.password)
        if (user && comparedPassword) {
            const userObj = await UserEntity.createFromObject(user);
            const payload = { id: user.id }
            const token = jwt.sign({ id: user.id }, "alihaseeb", {
                expiresIn: "24h",
            });

            return HttpResponse.create(HttpStatus.OK, { userObj, token });
        }
        throw new HttpException('Invalid Email or Password', HttpStatus.BAD_REQUEST)
    }

    async createUser(body) {
        const userBody = body;

        const alreadyExist = await this.userRepository.fetchUser(body.email)
        if (alreadyExist) {
            return HttpResponse.create(HttpStatus.BAD_REQUEST, { message: 'Email Already Taken' })
        }
        const id = uuid();
        const password = await this.encryptionService.hashPassword(body.password);
        userBody.password = password;
        const dtoUser = await UserEntity.createFromInput(id, userBody)
        const daoUser = await this.userRepository.createUser(dtoUser);
        if (daoUser) {
            const token = jwt.sign({ id: daoUser.id }, "alihaseeb", {
                expiresIn: "24h",
            });
            return HttpResponse.create(HttpStatus.CREATED, { message: 'Created Successfully', token })
        }
        throw new HttpException('user not created', HttpStatus.BAD_REQUEST)
    }
}