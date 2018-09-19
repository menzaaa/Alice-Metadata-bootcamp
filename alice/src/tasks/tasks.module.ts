import { Module, Controller, Global } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './tasks.entity';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([Tasks])],
    providers: [ TasksService ],
    controllers: [TasksController],
    exports: [TasksService]
})
export class TasksModule {}
