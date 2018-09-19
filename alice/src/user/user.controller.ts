import { Controller, Get, Param, HttpException, HttpStatus, Post, Body, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { TasksService } from '../tasks/tasks.service';
// import { Tasks } from '../tasks/tasks.entity';

@ApiUseTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiOperation({ title: 'Find all users'})
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('/:id')
    @ApiOperation({ title: 'Find by id'})
    async findOne(
        @Param('id') id: string,
    ) {
        const user = await this.userService.findOne(Number(id));
        if(!user){
            throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
        }
        return user;
    }

    // @Get('/:id/tasks')
    // @ApiOperation({ title: 'find all tasks by user'})
    // async findTaskByUser(@Param('id') id: string) {
    //     const user = await this.userService.findOne(Number(id));
    //     if(!user){
    //         throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    //     }
    //     return await this.taskService.findAllByUser(user);

    // }


    @Post()
    @ApiOperation({ title: 'Create user'})
    async create(@Body() CreateUserDto: CreateUserDto) {
        const user = new User();
        user.name = CreateUserDto.name;
        return this.userService.create(user);
    }

    @Put(':id')
    @ApiOperation({ title: 'Update user'})
    async update(@Param('id') id, @Body() UpdateUserDto) {
        let user = await this.userService.findOne(Number(id));
        if(!user){
            throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
        }
        user.name = UpdateUserDto.name;
        return this.userService.update(user);
    }
}