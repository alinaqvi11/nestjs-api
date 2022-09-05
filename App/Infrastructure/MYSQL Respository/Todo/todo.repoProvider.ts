import Todo from "App/Infrastructure/Model/todo.model";
import TodoRepository from "./todo.repository";


export const todoProvider = [{
    provide: 'TodoRepository',
    useValue: Todo,
}]

// export default { userProviders }