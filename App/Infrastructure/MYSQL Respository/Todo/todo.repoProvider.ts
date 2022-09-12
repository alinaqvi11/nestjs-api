import Todo from "App/Infrastructure/Model/Todo.model";
import todoRepository from "./Todo.repository";

export const todoProvider = [{
    provide: todoRepository,
    useValue: Todo,
}]
