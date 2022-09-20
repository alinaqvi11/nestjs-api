import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { TodoEntity } from 'App/Domain/Core/Todo/Todo.entity';
import { v4 as uuid } from 'uuid';
import HttpResponse from 'Http/Utils/HttpResponse';
import { ITodoRepository } from 'App/Domain/Core/Todo/ITodoRepository';


@Injectable()
export class TodoService {

    constructor(@Inject('ITodoRepository') private todoRepository: ITodoRepository) { }

    async getTodos() {
        const todos = await this.todoRepository.fetchAll();
        return HttpResponse.create(HttpStatus.OK, todos)
    }

    async getTodoById(todoId: string): Promise<any> {
        const todo = await this.todoRepository.fetchById(todoId);
        if (!todo) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
            return HttpResponse.create(HttpStatus.OK, todo)   
    }

    async createTodo(body, userId: string) {
        const todoId = uuid();
        body.userId = userId;
        const dtoTodo = await TodoEntity.createFromInput(todoId, body)
        const daoTodo = await this.todoRepository.createTodo(dtoTodo);
        if (daoTodo) {
            return HttpResponse.create(HttpStatus.CREATED, { message: "created successfully" })
        }
        return HttpResponse.create(HttpStatus.INTERNAL_SERVER_ERROR, { message: 'Not created' })
    }

    async updateTodo(todoId: string, body, userId: string) {
        const todoObj = await this.todoRepository.fetchById(todoId);
        if (!todoObj) { throw new HttpException('Todo Not Found', HttpStatus.NOT_FOUND) }
        if (todoObj.userId === userId) {
            body.userId = userId;
            const dtoTodo = await TodoEntity.createFromInput(todoId, body)
            const daoTodo = await this.todoRepository.updateTodo(dtoTodo);
            if (daoTodo) {
                return HttpResponse.create(HttpStatus.OK, { message: 'updated successfully' })
            } else {
                return HttpResponse.create(HttpStatus.INTERNAL_SERVER_ERROR, { message: 'Not updated' })
            }
        }
        return HttpResponse.create(HttpStatus.UNAUTHORIZED, { message: 'Unauthorized' })

    }

    async deleteTodo(todoId: string, userId: string, hardDelete: boolean) {
        const todoObj = await this.todoRepository.fetchById(todoId);
        if (!todoObj) { throw new HttpException('Todo Not Found', HttpStatus.NOT_FOUND) }

        if (todoObj.userId === userId) {
            await this.todoRepository.deletTodoById(todoId, hardDelete);
            return HttpResponse.create(HttpStatus.OK, { message: "deleted successfully" })
        }
        return HttpResponse.create(HttpStatus.UNAUTHORIZED, { message: 'Unauthorized' })
    }
}