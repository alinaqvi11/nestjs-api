import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoService } from './Todo.service';
import { TodoController } from 'Http/Controllers/todo.controller';
import TodoRepository from 'App/Infrastructure/Database/Todo/Todo.repository';
import { Auth } from 'Http/Middlewares/auth';

@Module({
    imports: [],
    providers: [TodoService, TodoRepository],
    controllers: [TodoController],
})

export class TodoModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(Auth)
            .forRoutes(TodoController);
    }
}