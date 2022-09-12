class UserEntity {

    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;


    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static createFromInput = (id, body) => {
        const user = new UserEntity(
            id,
            body.name,
            body.email,
        );
        user.password = body.password
        return user;
    };

    static createFromObject = (obj) => {
        const user = new UserEntity(
            obj.id,
            obj.name,
            obj.email,
        );
        user.createdAt = obj.createdAt;
        user.updatedAt = obj.updatedAt;
        return user;
    };
}
export default UserEntity;