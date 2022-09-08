export interface IUserRepository {

    fetchUser(email): Promise<any>;
    createUser(body): Promise<any>;

}
