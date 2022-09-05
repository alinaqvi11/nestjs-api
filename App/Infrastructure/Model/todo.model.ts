import { Table, Column, Model, DataType, PrimaryKey, Unique, AllowNull, IsUUID, IsEmail } from 'sequelize-typescript';

@Table({
    tableName: 'todo',
    timestamps: true,
    paranoid: true,
})
export default class Todo extends Model<Todo> {

    @IsUUID(4)
    @PrimaryKey
    @Unique
    @AllowNull(false)
    @Column
        ({
            type: DataType.STRING({ length: 50 }),
        })
    todoId: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING({ length: 50 }),
    })
    todoName: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING({ length: 100 }),
    })
    todoDescription: string;


    // @IsEmail
    // @AllowNull(false)
    // @Unique
    // @Column({
    //     type: DataType.STRING({ length: 40 }),
    // })
    // email: string;

    // @AllowNull(false)
    // @Column({
    //     type: DataType.STRING({ length: 40 }),
    // })
    // password: string;
}
