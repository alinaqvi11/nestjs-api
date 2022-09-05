import { Injectable, Inject } from '@nestjs/common';
import { TodoEntity } from 'App/Domain/Core/todo.entity';
import TodoRepository from 'App/Infrastructure/MYSQL Respository/Todo/todo.repository';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodoService {

    constructor() { }

    async getTodos() {
        return TodoRepository.fetchAll()
    }

    async getTodoById(id) {
        const todo = await TodoRepository.fetchById(id);
        if (!todo) {
            return {
                message: "todo not found"
            }
        }
        return todo
    }

    async createTodo(body) {
        const todoBody = body;
        const todoId = uuid();
        const todoDto = await TodoEntity.createFromInput(todoId, todoBody)
        const createdTodo = await TodoRepository.createTodo(todoDto);
        if (createdTodo) {
            return {
                message: "created successfully"
            }
        }
        return {
            message: 'todo is not created'
        }
    }

    async updateTodo(body, id) {
        const todoBody = body;
        const todoDto = await TodoEntity.createFromInput(id, body)
        const updatedTodo = await TodoRepository.updateTodo(todoDto);
        if (updatedTodo) {
            return {
                message: 'updated successfully'
            }
        }
        return {
            message: 'no todo updated'
        }
    }

    async deleteTodo(id, hardDelete) {
        const todo = await TodoRepository.deletTodoById(id, hardDelete = false);
        if (!todo) {
            return {
                message: "todo not found"
            }
        }
        return {
            message: 'deleted successfully'
        }

    }

}