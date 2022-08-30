import User from "App/Infrastructure/Model/user.model";
import { UserRepository } from "./user.repository";

const userProviders = [{
    provide: UserRepository,
    useValue: User,
}]

export default { userProviders }