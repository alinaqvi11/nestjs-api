import User from "App/Infrastructure/Model/User.model";
import DatabaseError from "App/Infrastructure/Errors/DatabaseError";
import { IUserRepository } from "App/Domain/Core/User/IUserRepository";
import { Injectable } from "@nestjs/common";
import UserEntity from "App/Domain/Core/User/User.entity";


@Injectable()
class UserRepository implements IUserRepository {
    constructor() { }

    async fetchUser(email: string): Promise<User> {
        try {
            return User.findOne({
                where: {
                    email
                }
            })
        } catch (err) {
            throw new DatabaseError(err.message)

        }
    }

    async createUser(body: UserEntity): Promise<User> {
        try {
            return User.create(body)
        } catch (err) {
            throw new DatabaseError(err.message)
        }
    }

}

export default UserRepository;
