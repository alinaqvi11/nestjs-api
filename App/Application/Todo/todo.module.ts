import { Module } from '@nestjs/common';
import { TodoService } from './Todo.service';
import { TodoController } from '../../../Http/Controllers/todo.controller';
import TodoRepository from 'App/Infrastructure/MYSQL Respository/Todo/Todo.repository';

@Module({
    imports: [],
    providers: [TodoService, TodoRepository],
    controllers: [TodoController],
})

export class TodoModule { }