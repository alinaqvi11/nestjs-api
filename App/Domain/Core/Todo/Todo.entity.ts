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

    static createFromInput = (todoId, body) => {
        return new TodoEntity(
            todoId,
            body.todoName,
            body.todoDescription,
            body.userId
        );
    };

    static createFromObject = (obj) => {
        const todo = new TodoEntity(
            obj.todoId,
            obj.todoName,
            obj.todoDescription,
            obj.userId,
        );
        todo.createdAt = obj.createdAt;
        todo.updatedAt = obj.updatedAt;

        return todo;
    };
}
