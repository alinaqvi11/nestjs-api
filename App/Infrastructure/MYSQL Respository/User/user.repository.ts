import UserModel from "App/Infrastructure/Model/user.model";
import DatabaseError from "App/Infrastructure/Errors/DatabaseError";

class UserRepository {
    constructor() { }

    async fetchUser(email) {
        try {
            return UserModel.findOne({
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
            return UserModel.create(body)
        } catch (err) {
            throw new DatabaseError(err.message)

        }
    }
}

export default new UserRepository();
