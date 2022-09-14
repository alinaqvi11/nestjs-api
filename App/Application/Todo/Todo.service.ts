import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { TodoEntity } from 'App/Domain/Core/Todo/Todo.entity';
import TodoRepository from 'App/Infrastructure/Database/Todo/Todo.repository';
import { v4 as uuid } from 'uuid';
import HttpResponse from 'Http/Utils/HttpResponse';
import { ITodoService } from './ITodoService'


@Injectable()
export class TodoService implements ITodoService {

    constructor(private todoRepository: TodoRepository) { }

    async getTodos() {
        const todos = await this.todoRepository.fetchAll();
        return HttpResponse.create(HttpStatus.OK, todos)
    }

    async getTodoById(todoId: string, userId: string): Promise<any> {
        const todo = await this.todoRepository.fetchById({ todoId, userId });
        if (!todo) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return HttpResponse.create(HttpStatus.OK, todo)
    }

    async createTodo(body, userId: string) {
        const todoId = uuid();
        const todoBody = body;
        todoBody.userId = userId;
        const dtoTodo = await TodoEntity.createFromInput(todoId, body)
        const daoTodo = await this.todoRepository.createTodo(dtoTodo);
        if (daoTodo) {
            return HttpResponse.create(HttpStatus.CREATED, { message: "created successfully" })
        }
        throw new HttpException('Not created', HttpStatus.BAD_REQUEST)
    }

    async updateTodo(todoId: string, body, userId: string) {
        const todoBody = body;
        body.userId = userId;
        const dtoTodo = await TodoEntity.createFromInput(todoId, body)
        const daoTodo = await this.todoRepository.updateTodo(dtoTodo);
        if (daoTodo) {
            return HttpResponse.create(HttpStatus.OK, { message: 'updated successfully' })
        }
        throw new HttpException('Not updated', HttpStatus.BAD_REQUEST)
    }

    async deleteTodo(todoId: string, userId: string, hardDelete: boolean) {
        const todo = await this.todoRepository.deletTodoById(todoId, userId, hardDelete);
        if (!todo) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return HttpResponse.create(HttpStatus.OK, { message: "deleted successfully" })
    }

}