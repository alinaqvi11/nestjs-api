import Todo from "App/Infrastructure/Model/Todo.model";
import { ITodoRepository } from "App/Domain/Core/Todo/ITodoRepository";
import { TodoEntity } from "App/Domain/Core/Todo/Todo.entity";
import DatabaseError from "App/Infrastructure/Errors/DatabaseError";
import { Injectable } from "@nestjs/common";

type searchFilterRequest = {
    todoId: string,
    userId: string
};


@Injectable()
class TodoRepository implements ITodoRepository {
    constructor() { }

    async fetchAll(): Promise<any> {
        try {
            const todos = await Todo.findAll();
            return todos.map(todoObj => {
                return TodoEntity.createFromObject(todoObj)
            })
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }
    async fetchById(searchFilter: searchFilterRequest): Promise<Todo> {
        try {
            return Todo.findOne({
                where: searchFilter
            })
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }

    async createTodo(body: TodoEntity): Promise<boolean> {
        try {
            await Todo.create(body);
            return true
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }

    async updateTodo(todo: TodoEntity): Promise<boolean> {
        try {
            const todoObj = await Todo.update(todo,
                {
                    where: {
                        todoId: todo.todoId,
                        userId: todo.userId
                    }
                })
            if (todoObj[0] === 0) {

                return false;
            }
            return true
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }

    async deletTodoById(todoId: string, hardDelete: boolean, userId: string): Promise<number> {
        try {
            return Todo.destroy(
                {
                    where: {
                        todoId,
                        userId
                    },
                    force: hardDelete
                })
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }

}

export default TodoRepository