import User from "App/Infrastructure/Model/User.model";
import UserRepository from 'App/Infrastructure/MYSQL Respository/User/User.repository';

export const userProvider = [{
    provide: UserRepository,
    useValue: User,
}]