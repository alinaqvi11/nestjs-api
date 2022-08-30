import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export default class User extends Model<User> {

    @Column({
        type: DataType.STRING({ length: 20 }),
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING({ length: 40 }),
        allowNull: false,
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING({ length: 40 }),
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING({ length: 10 }),
        allowNull: false,
        values: ['male', 'female'],
    })
    gender: string;
}