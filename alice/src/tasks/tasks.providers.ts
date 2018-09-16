import { Connection } from 'typeorm';
import { Tasks } from './tasks.entity';

export const tasksProviders = [
    {
        provide: 'TasksRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Tasks),
        inject: ['DbConnectionToken'],
    }
];