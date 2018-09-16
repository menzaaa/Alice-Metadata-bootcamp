import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {
    constructor(
        @Inject('TasksRepositoryToken')
        private readonly tasksRepository: Repository<Tasks>,
    ) {}

    async findAll(): Promise<Tasks[]> {
        return await this.tasksRepository.find();
    }
}