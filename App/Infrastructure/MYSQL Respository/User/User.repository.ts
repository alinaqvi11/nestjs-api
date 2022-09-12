import User from "App/Infrastructure/Model/User.model";
import DatabaseError from "App/Infrastructure/Errors/DatabaseError";
import { IUserRepository } from "App/Domain/Core/User/IUserRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
class UserRepository implements IUserRepository {
    constructor() { }

    async fetchUser(email) {
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

    async createUser(body) {
        try {
            return User.create(body)
        } catch (err) {
            throw new DatabaseError(err.message)
        }
    }

}

export default UserRepository;
