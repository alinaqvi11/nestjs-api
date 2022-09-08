import Todo from "App/Infrastructure/Model/todo.model";
import { ITodoRepository } from "App/Domain/Core/Todo/ITodoRepository";
import { TodoEntity } from "App/Domain/Core/Todo/todo.entity";
import DatabaseError from "App/Infrastructure/Errors/DatabaseError";
import { Injectable } from "@nestjs/common";

@Injectable()
class TodoRepository implements ITodoRepository {
    constructor() { }

    async fetchAll() {
        try {
            const todos = await Todo.findAll();
            return todos.map(todoObj => {
                return TodoEntity.createFromObject(todoObj)
            })
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }
    async fetchById(searchFilter) {
        try {
            return Todo.findOne({
                where: searchFilter
            })

        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }

    async createTodo(body) {
        try {
            return Todo.create(body);
            return true;

        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }

    async updateTodo(body) {
        try {
            return Todo.update(body,
                {
                    where: {
                        todoId: body.todoId
                    }
                })
            return true;

        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }

    async deletTodoById(id, hardDelete) {
        try {
            return Todo.destroy(
                {
                    where: {
                        todoId: id
                    },
                    force: hardDelete
                })
            return true;

        } catch (error) {
            throw new DatabaseError(error.message);
        }

    }

}

export default TodoRepository