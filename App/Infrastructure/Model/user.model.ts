import { Table, Column, Model, DataType, PrimaryKey, Unique, AllowNull, IsUUID, IsEmail, HasOne } from 'sequelize-typescript';
import TodoModel from './todo.model';

@Table({
    tableName: 'user',
    timestamps: true,
    paranoid: true,

})
export default class User extends Model<User> {

    @IsUUID(4)
    @PrimaryKey
    @Unique
    @AllowNull(false)
    @Column
        ({
            type: DataType.STRING({ length: 50 }),
        })
    id: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING({ length: 50 }),
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
        type: DataType.STRING({ length: 100 }),
    })
    password: string;

    @HasOne(() => TodoModel)
    todo: TodoModel;

}
