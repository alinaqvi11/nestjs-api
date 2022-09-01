import { Injectable, Inject } from '@nestjs/common';
import UserModel from '../../Infrastructure/Model/user.model';
import { UserRepository } from 'App/Infrastructure/MYSQL Respository/User/user.repository';

@Injectable()
export class UsersService {

    constructor(private userRepository: UserRepository) { }

    async getUsers() {
        return UserRepository.fetchAll()
    }

    // async getUser(id: string) {
    //     return this.UserModel.find({
    //         where: [{ "id": id }]
    //     });
    // }

    async createUser() {
        // const
    }

    // async updateUser() {
    //     return this.UserModel.save()
    // }

    // async deleteUser() {
    //     return this.UserModel.delete();
    // }
}