import { Module, Controller } from '@nestjs/common';
import { DatabaseModule } from './../database.module';
import { tasksProviders } from './tasks.providers';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { UserService } from '../user/user.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...tasksProviders,
        TasksService,
        UserService,
    ],
    controllers: [TasksController],
})
export class TasksModule {}
