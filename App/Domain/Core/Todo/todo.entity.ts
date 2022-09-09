export class TodoEntity {
    todoId: string;
    todoName: string;
    todoDescription: string
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    userId: string;


    constructor(todoId: string, todoName: string, todoDescription: string, userId: string) {
        this.todoId = todoId;
        this.todoName = todoName;
        this.todoDescription = todoDescription;
        this.userId = userId;
    }
    static createFromInput = (todoId: string, body: any) => {
        const todo = new TodoEntity(
            todoId,
            body.todoName,
            body.todoDescription,
            body.userId
        );
        return todo;

    };
    static createFromObject = (obj: any) => {
        const todo = new TodoEntity(
            obj.todoId,
            obj.userId,
            obj.todoName,
            obj.todoDescription
        );
        todo.createdAt = obj.createdAt;
        todo.updatedAt = obj.updatedAt;

        return todo;
    };
}
