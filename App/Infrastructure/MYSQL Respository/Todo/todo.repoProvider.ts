import Todo from "App/Infrastructure/Model/todo.model";

export const todoProvider = [{
    provide: 'TodoRepository',
    useValue: Todo,
}]

// export default { userProviders }