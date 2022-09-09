import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from '../../../Http/Controllers/todo.controller';
import { todoProvider } from 'App/Infrastructure/MYSQL Respository/Todo/todo.repoProvider';
import TodoRepository from 'App/Infrastructure/MYSQL Respository/Todo/todo.repository';

@Module({
    imports: [],
    providers: [TodoService, TodoRepository],
    controllers: [TodoController],
})

export class TodoModule { }