import { Controller, Post, Body, Get, Put, Delete, Param, Res, Query } from '@nestjs/common';
import { TodoService } from 'App/Application/Todo/Todo.service';
import HttpResponse from 'Http/Utils/HttpResponse';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) { }


    @Get('/')
    async getAll(@Res() res) {
        const todos = await this.todoService.getTodos();
        HttpResponse.convertToExpress(res, todos)
    }

    @Get(':todoId')
    async get(@Param() params, @Res() res, @Body() body) {
        const todo = await this.todoService.getTodoById(params.todoId, body);
        HttpResponse.convertToExpress(res, todo)
    }

    @Post('/')
    async create(@Body() body, @Res() res) {
        const todo = await this.todoService.createTodo(body);
        HttpResponse.convertToExpress(res, todo)
    }

    @Put(':todoId')
    async update(@Body() body, @Res() res, @Param() params) {
        const todo = await this.todoService.updateTodo(params.todoId, body);
        HttpResponse.convertToExpress(res, todo)
    }

    @Delete(':todoId/:userId')
    async deleteUser(@Param() params, @Res() res, @Query() query) {
        const { todoId, userId } = params;
        const hardDelete = query;
        const todo = await this.todoService.deleteTodo(todoId, hardDelete, userId);
        HttpResponse.convertToExpress(res, todo)
    }
}