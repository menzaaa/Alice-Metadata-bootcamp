import { Controller, Get, Param, Response as Res, HttpException, HttpStatus, Post, Body } from '@nestjs/common';
import { Tasks } from './tasks.entity';
import { TasksService } from './tasks.service';
import { User } from './../user/user.entity';
import { UserService} from './../user/user.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService, private readonly userService: UserService) {}
  @Get()
  async findAll() {
    const user = await this.userService.findOne(Number(1));
    if(!user){
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    }
    return user;
    // return this.tasksService.findAll();
  }
}