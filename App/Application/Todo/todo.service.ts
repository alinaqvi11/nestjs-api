import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { TodoEntity } from 'App/Domain/Core/Todo/todo.entity';
import TodoRepository from 'App/Infrastructure/MYSQL Respository/Todo/todo.repository';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodoService {

    constructor() { }

    async getTodos() {
        try {
            return TodoRepository.fetchAll()

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    async getTodoById(id) {
        try {
            const todo = await TodoRepository.fetchById({ id });
            if (!todo) {
                throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
            }
            return todo

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async createTodo(body) {
        try {
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

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    async updateTodo(body, id) {
        try {
            const todoBody = body;
            const todoDto = await TodoEntity.createFromInput(id, body)
            const updatedTodo = await TodoRepository.updateTodo(todoDto);
            if (updatedTodo) {
                return {
                    message: 'updated successfully'
                }
            }
            return {
                message: 'todo not updated'
            }

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    async deleteTodo(id, hardDelete) {
        try {
            const todo = await TodoRepository.deletTodoById(id, hardDelete = false);
            if (!todo) {
                throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
            }
            return {
                message: "deleted successfully"
            }

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}