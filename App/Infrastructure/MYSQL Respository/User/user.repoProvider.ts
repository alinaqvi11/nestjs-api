import User from "App/Infrastructure/Model/user.model";
import UserRepository from 'App/Infrastructure/MYSQL Respository/User/user.repository';
import { IUserRepository } from "App/Domain/Core/User/IUserRepository";

export const userProvider = [{
    provide: UserRepository,
    useValue: User,
}]