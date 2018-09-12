import { Controller, Get, Param, Response as Res, HttpException, HttpStatus, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

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
    async findOne( 
        @Param('id') id: string,
    ) {
        const user = await this.userService.findOne(Number(id));
        if(!user){
            throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
        }
        return user;
  }

  @Post()
  @ApiOperation({ title: 'Create user'})
  async create(@Body() CreateUserDto: CreateUserDto) {
    console.log('User has been created');
  }
}