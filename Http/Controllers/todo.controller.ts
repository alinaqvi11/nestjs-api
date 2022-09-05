
import { Controller, Post, Body, Get, Put, Delete, Param, Res, Req, Query } from '@nestjs/common';
import { TodoService } from '../../App/Application/Todo/todo.service';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) { }


    @Get('/')
    async getAll(@Res() res) {
        const todos = await this.todoService.getTodos();
        res.send({ data: todos })
    }

    @Get(':id')
    async get(@Param() params, @Res() res) {
        const todo = await this.todoService.getTodoById(params.id);
        res.send({ data: todo })
    }

    @Post('/')
    async create(@Body() todo, @Res() res) {
        const createdTodo = await this.todoService.createTodo(todo);
        res.send(createdTodo)

    }

    @Put(':id')
    async update(@Body() todo, @Res() res, @Param() params) {
        const updatedUser = await this.todoService.updateTodo(todo, params.id);
        res.send(updatedUser)
    }

    @Delete(':id')
    async deleteUser(@Param() params, @Res() res, @Query() query) {
        const hardDelete = query;
        const deletedTodo = await this.todoService.deleteTodo(params.id, hardDelete);
        res.send(deletedTodo)
    }
}