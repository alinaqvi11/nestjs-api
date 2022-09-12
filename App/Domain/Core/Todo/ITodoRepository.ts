import Todo from "App/Infrastructure/Model/Todo.model";

export interface ITodoRepository {

    fetchAll(): Promise<any>;
    fetchById(searchFilter): Promise<any>;
    createTodo(body): Promise<boolean>;
    updateTodo(todo): Promise<boolean>;
    deletTodoById(id, hardDelete: boolean, body): Promise<number>
}
