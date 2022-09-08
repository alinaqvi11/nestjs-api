import { TodoEntity } from "App/Domain/Core/Todo/todo.entity";
import Todo from "App/Infrastructure/Model/todo.model";
import todoRepository from "./todo.repository";

export const todoProvider = [{
    provide: todoRepository,
    useValue: Todo,
}]

// export default { userProviders }