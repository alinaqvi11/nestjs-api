import { Controller, Post, Body, Get, Put, Delete, Param, Res, Query } from '@nestjs/common';
import { TodoService } from '../../App/Application/Todo/Todo.service';
import HttpResponse from 'Http/Utils/HttpResponse';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) { }


    @Get('/')
    async getAll(@Res() res) {
        const todos = await this.todoService.getTodos();
        HttpResponse.convertToExpress(res, todos)
    }

    @Get(':id')
    async get(@Param() params, @Res() res, @Body() body) {
        const todo = await this.todoService.getTodoById(params.id, body);
        HttpResponse.convertToExpress(res, todo)
    }

    @Post('/')
    async create(@Body() body, @Res() res) {
        const todo = await this.todoService.createTodo(body);
        HttpResponse.convertToExpress(res, todo)
    }

    @Put(':id')
    async update(@Body() body, @Res() res, @Param() params) {
        const todo = await this.todoService.updateTodo(params.id, body);
        HttpResponse.convertToExpress(res, todo)
    }

    @Delete(':id')
    async deleteUser(@Param() params, @Res() res, @Query() query, @Body() body,) {
        const hardDelete = query;
        const todo = await this.todoService.deleteTodo(params.id, hardDelete, body);
        HttpResponse.convertToExpress(res, todo)
    }
}