import { Module } from '@nestjs/common';
import { UserService } from './User/User.service';
import { TodoService } from './Todo/Todo.service';
import EncryptionService from 'App/Infrastructure/Services/Encryption/EncryptionService';
import { DatabaseModule } from 'App/Infrastructure/Database/database.module';
 
@Module({
   imports: [DatabaseModule],
   providers: [
       UserService,
       TodoService,
       EncryptionService,
   ],
   exports: [UserService, TodoService]
})
 
export class ApplicationModule { }