export interface IUserService {
    login(email: string, password: string): Promise<any>
    createUser(body): Promise<any>
}