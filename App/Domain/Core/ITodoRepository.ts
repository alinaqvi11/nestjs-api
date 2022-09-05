export interface ITodoRepository {

    fetchAll(): Promise<any>;
    fetchById(searchFilter): Promise<any>;
    createTodo(body): Promise<boolean>;
    updateTodo(body): Promise<boolean>;
    deletTodoById(id, hardDelete: boolean): Promise<boolean>
}
