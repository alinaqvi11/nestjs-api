import { Logger } from "@nestjs/common";
import TodoModel from "App/Infrastructure/Model/todo.model";
import { ITodoRepository } from "App/Domain/Core/Todo/ITodoRepository";
import { TodoEntity } from "App/Domain/Core/Todo/todo.entity";
import DatabaseError from "App/Infrastructure/Errors/DatabaseError";

class UserRepository implements ITodoRepository {
    constructor() { }

    async fetchAll() {
        try {
            const todos = await TodoModel.findAll();
            return todos.map(todoObj => {
                return TodoEntity.createFromObject(todoObj)
            })
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }
    async fetchById(searchFilter) {
        try {
            return TodoModel.findOne({
                where: searchFilter
            })

        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }

    async createTodo(body) {
        try {
            return TodoModel.create(body);
            return true;

        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }

    async updateTodo(body) {
        try {
            return TodoModel.update(body,
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
            return TodoModel.destroy(
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

export default new UserRepository()