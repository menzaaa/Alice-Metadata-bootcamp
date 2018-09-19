import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tasks } from './tasks.entity';
import { User } from 'user/interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Tasks)
        private readonly tasksRepository: Repository<Tasks>,
    ) {}

    async findAll(): Promise<Tasks[]> {
        return await this.tasksRepository.find();
    }

    async findAllByUser(user: User): Promise<Tasks[]> {
        return await this.tasksRepository.find({user: user});
    }
    
    async findOne(id: Number) {
        return await this.tasksRepository.findOne({
            where: { 
                id: id
            }
        });
    }
}