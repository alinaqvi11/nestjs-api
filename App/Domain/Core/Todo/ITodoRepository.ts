export interface ITodoRepository {

    fetchAll(): Promise<any>;
    fetchById(searchFilter): Promise<any>;
    createTodo(body): Promise<any>;
    updateTodo(body): Promise<any>;
    deletTodoById(id, hardDelete: boolean): Promise<any>
}
