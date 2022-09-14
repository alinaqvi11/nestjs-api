import Todo from "App/Infrastructure/Database/Model/Todo.model";
import { TodoEntity } from "./Todo.entity";

type searchFilterRequest = {
    todoId: string,
    userId: string
};

export interface ITodoRepository {

    fetchAll(): Promise<any>;
    fetchById(searchFilter: searchFilterRequest): Promise<Todo>;
    createTodo(body: TodoEntity): Promise<boolean>;
    updateTodo(todo: TodoEntity): Promise<boolean>;
    deletTodoById(id: string, userId: string, hardDelete: boolean): Promise<number>
}
