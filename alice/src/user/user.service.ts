import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number) {
        return await this.userRepository.findOne({
            select: ["id", "name"],
            relations: ["Tasks"]
        });
    }

    async create(user: User) {
        return await this.userRepository.save(user);
    }

    async update(user: User) {
        return await this.userRepository.save(user);
    }
}