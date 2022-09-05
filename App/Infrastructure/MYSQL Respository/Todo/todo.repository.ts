import { Logger } from "@nestjs/common";
import TodoModel from "App/Infrastructure/Model/todo.model";
import { ITodoRepository } from "App/Domain/Core/ITodoRepository";
import { TodoEntity } from "App/Domain/Core/todo.entity";

class UserRepository implements ITodoRepository {
    constructor() { }

    async fetchAll() {
        try {
            const todos = await TodoModel.findAll();
            return todos.map(todoObj => {
                return TodoEntity.createFromObject(todoObj)
            })
        } catch (error) {
            Logger.error(error, ">>>>>>>>>")
        }
    }
    async fetchById(searchFilter) {
        try {
            return TodoModel.findOne(searchFilter)

        } catch (error) {
            Logger.error(error, ">>>>>>>>>")
        }
    }

    async createTodo(body) {
        try {
            await TodoModel.create(body);
            return true;

        } catch (error) {
            Logger.error(error, ">>>>>>>>>")
        }
    }

    async updateTodo(body) {
        try {
            await TodoModel.update(body,
                {
                    where: {
                        todoId: body.todoId
                    }
                })
            return true;

        } catch (error) {
            Logger.error(error, ">>>>>>>>>")
        }
    }

    async deletTodoById(id, hardDelete) {
        try {
            console.log(hardDelete);

            await TodoModel.destroy(
                {
                    where: {
                        todoId: id
                    },
                    force: hardDelete
                })
            return true;

        } catch (error) {
            Logger.error(error, ">>>>>>>>>")
        }

    }

}

export default new UserRepository()