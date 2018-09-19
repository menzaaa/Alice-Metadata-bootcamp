import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { TasksService } from 'tasks/tasks.service';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, TasksService],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule {}