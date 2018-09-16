import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tasks } from '../tasks/tasks.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500})
    name: string;

    @OneToMany(type => Tasks, tasks => tasks.user)
    Tasks: Tasks[];
}