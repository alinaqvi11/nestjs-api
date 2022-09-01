import { Table, Column, Model, DataType, PrimaryKey, Unique, AllowNull, IsUUID, IsEmail } from 'sequelize-typescript';

@Table
export default class User extends Model<User> {

    @IsUUID(4)
    @PrimaryKey
    @Unique
    @AllowNull(false)
    @Column
        ({
            type: DataType.STRING({ length: 20 }),
        })
    userId: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING({ length: 20 }),
    })
    name: string;

    @IsEmail
    @AllowNull(false)
    @Unique
    @Column({
        type: DataType.STRING({ length: 40 }),
    })
    email: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING({ length: 40 }),
    })
    password: string;

}