
export interface ITodoService {
    getTodos(): Promise<any>
    getTodoById(todoId: string, userId: string): Promise<any>
    createTodo(body, userId: string): Promise<any>
    updateTodo(todoId: string, body, userId: string): Promise<any>
    deleteTodo(todoId: string, userId: string, hardDelete: boolean): Promise<any>
}