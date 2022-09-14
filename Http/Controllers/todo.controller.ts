import { Controller, Post, Body, Get, Put, Delete, Param, Res, Query, Req } from '@nestjs/common';
import { TodoService } from 'App/Application/Todo/Todo.service';
import HttpResponse from 'Http/Utils/HttpResponse';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) { }


    @Get('/')
    async getAll(@Res() res, @Req() req) {
        const todos = await this.todoService.getTodos();
        HttpResponse.convertToExpress(res, todos)
    }

    @Get(':todoId')
    async get(@Param() params, @Res() res, @Body() body, @Req() req) {
        const todo = await this.todoService.getTodoById(req.params.todoId, req.user);
        HttpResponse.convertToExpress(res, todo)
    }

    @Post('/')
    async create(@Body() body, @Res() res, @Req() req) {
        const todo = await this.todoService.createTodo(req.body, req.user);
        HttpResponse.convertToExpress(res, todo)
    }

    @Put(':todoId')
    async update(@Body() body, @Res() res, @Param() params, @Req() req) {
        const todo = await this.todoService.updateTodo(req.params.todoId, req.body, req.user);
        HttpResponse.convertToExpress(res, todo)
    }

    @Delete(':todoId')
    async deleteUser(@Param() params, @Res() res, @Query() query, @Req() req) {
        const hardDelete: boolean = query;
        const todo = await this.todoService.deleteTodo(req.params.todoId, req.user, hardDelete);
        HttpResponse.convertToExpress(res, todo)
    }
}