import User from "App/Infrastructure/Database/Model/User.model";
import UserEntity from "./User.entity";

export interface IUserRepository {
    fetchUser(email: string): Promise<User>;
    createUser(body: UserEntity): Promise<User>;
}
