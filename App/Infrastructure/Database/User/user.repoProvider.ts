import User from "App/Infrastructure/Database/Model/User.model";
import UserRepository from 'App/Infrastructure/Database/User/User.repository';

export const userProvider = [{
    provide: UserRepository,
    useValue: User,
}]