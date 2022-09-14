import { Module, Global } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { userProvider } from './User/user.repoProvider';
import { todoProvider } from './Todo/todo.repoProvider';

@Global()
@Module({
    providers: [...databaseProviders, ...todoProvider, ...userProvider],
    exports: [...databaseProviders, ...todoProvider, ...userProvider]
})
export class DatabaseModule { }