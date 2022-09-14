import Todo from "App/Infrastructure/Database/Model/Todo.model";
import TodoRepository from "./Todo.repository";

export const todoProvider = [{
    provide: TodoRepository,
    useValue: Todo,
}]