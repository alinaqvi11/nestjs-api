import Todo from "App/Infrastructure/Database/Model/Todo.model";
import { TodoEntity } from "./Todo.entity";


export interface ITodoRepository {

    fetchAll(): Promise<any>;
    fetchById(todoId : string): Promise<Todo>;
    createTodo(body: TodoEntity): Promise<boolean>;
    updateTodo(todo: TodoEntity): Promise<boolean>;
    deletTodoById(id: string, hardDelete: boolean): Promise<number>
}
