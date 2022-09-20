import TodoRepository from "./Todo.repository";

export const todoProvider = [{
    provide: 'ITodoRepository',
    useClass: TodoRepository,
}]