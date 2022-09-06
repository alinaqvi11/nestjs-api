import { Table, Column, Model, DataType, PrimaryKey, Unique, AllowNull, IsUUID, ForeignKey } from 'sequelize-typescript';
import User from './user.model';

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
    @ForeignKey(() => User)
    @Column
        ({
            type: DataType.STRING({ length: 50 }),
        })
    userId: string;

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

}
