import { Controller, Get, Param, Response as Res, HttpException, HttpStatus, Post, Body } from '@nestjs/common';
import { Tasks } from './tasks.entity';
import { TasksService } from './tasks.service';
import { User } from './../user/user.entity';
import { UserService} from './../user/user.service';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('tasks')
@Controller('tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService, private readonly userService: UserService) {}

	@Get()
	@ApiOperation({ title: 'Find all tasks'})
	async findAll(): Promise<Tasks[]> {
		return await this.tasksService.findAll();
	}

	@Get('/:id')
	async findOne(@Param('id') id: string) {
		const task = this.tasksService.findOne(Number(id));
		if(!task){
            throw new HttpException('Task not found.', HttpStatus.NOT_FOUND);
		}
		return task;
	}

	@Post('/user/:id')
	@ApiOperation({ title: "Create task"})
	async create() {
		
	}

	
}