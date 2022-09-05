export class TodoEntity {
    todoId: string;
    todoName: string;
    todoDescription: string
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;


    constructor(todoId: string, todoName: string, todoDescription: string) {
        this.todoId = todoId;
        this.todoName = todoName;
        this.todoDescription = todoDescription
    }
    static createFromInput = (todoId: string, body: any) => {
        const todo = new TodoEntity(
            todoId,
            body.todoName,
            body.todoDescription
        );
        return todo;

    };
    static createFromObject = (obj: any) => {
        const todo = new TodoEntity(
            obj.todoId,
            obj.todoName,
            obj.todoDescription
        );
        todo.createdAt = obj.createdAt;
        todo.updatedAt = obj.updatedAt;

        return todo;
    };
}
