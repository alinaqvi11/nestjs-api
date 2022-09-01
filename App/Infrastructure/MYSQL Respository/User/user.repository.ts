import { Logger } from "@nestjs/common";
import User from "App/Infrastructure/Model/user.model";

export class UserRepository {
    constructor() { }

    static fetchAll = async () => {
        try {
            const user = await User.findAll();
            return user.map(userObj => {
                return UserEntity.createFromObject(userObj)
            })
        } catch (error) {
            Logger.error(error, ">>>>>>>>>")
        }
    }
    static fetchByIdOrEmail = async (searchFilter) => {
        try {
            return User.findOne(searchFilter)

        } catch (error) {
            Logger.error(error, ">>>>>>>>>")
        }
    }

    static createUser = async () => {
        try {
            // return User.findOne(searchFilter)

        } catch (error) {
            Logger.error(error, ">>>>>>>>>")
        }

    }

}