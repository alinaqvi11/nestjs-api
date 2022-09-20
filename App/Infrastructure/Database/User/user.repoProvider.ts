import UserRepository from 'App/Infrastructure/Database/User/User.repository';

export const userProvider = [{
    provide: 'IUserRepository',
    useClass: UserRepository,
}]