import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { TodoEntity } from 'App/Domain/Core/Todo/Todo.entity';
import TodoRepository from 'App/Infrastructure/MYSQLRespository/Todo/Todo.repository';
import { v4 as uuid } from 'uuid';
import HttpResponse from 'Http/Utils/HttpResponse';


@Injectable()
export class TodoService {

    constructor(private todoRepository: TodoRepository) { }

    async getTodos() {
        const todos = await this.todoRepository.fetchAll();
        return HttpResponse.create(HttpStatus.OK, todos)
    }

    async getTodoById(id, body) {
        const todo = await this.todoRepository.fetchById({ todoId: id, userId: body.userId });
        if (!todo) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return HttpResponse.create(HttpStatus.OK, todo)
    }

    async createTodo(req) {
        const todoId = uuid();
        const body = req.body;
        body.userId = req.user;
        const dtoTodo = await TodoEntity.createFromInput(todoId, body)
        const daoTodo = await this.todoRepository.createTodo(dtoTodo);
        if (daoTodo) {
            return HttpResponse.create(HttpStatus.CREATED, { message: "created successfully" })
        }
        throw new HttpException('Not created', HttpStatus.BAD_REQUEST)
    }

    async updateTodo(id, body) {
        const dtoTodo = await TodoEntity.createFromInput(id, body)
        const daoTodo = await this.todoRepository.updateTodo(dtoTodo);
        if (daoTodo) {
            return HttpResponse.create(HttpStatus.OK, { message: 'updated successfully' })
        }
        throw new HttpException('Not updated', HttpStatus.BAD_REQUEST)
    }

    async deleteTodo(todoId, hardDelete, userId) {
        const todo = await this.todoRepository.deletTodoById(todoId, hardDelete = false, userId);
        if (!todo) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return HttpResponse.create(HttpStatus.OK, { message: "deleted successfully" })
    }

}