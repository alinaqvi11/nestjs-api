import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from '../../../Http/Controllers/todo.controller';

@Module({
    imports: [],
    providers: [TodoService],
    controllers: [TodoController],
})

export class TodoModule { }