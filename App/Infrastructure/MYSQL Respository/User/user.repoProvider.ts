import User from "App/Infrastructure/Model/user.model";

export const todoProvider = [{
    provide: 'UserRepository',
    useValue: User,
}]