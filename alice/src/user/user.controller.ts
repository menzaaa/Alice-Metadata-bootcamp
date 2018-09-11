import { Controller, Get, Param, Response as Res, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('/:id')
    async findOne( 
        @Param('id') id,
    ) {
        const user = await this.userService.findOne(Number(id));
        if(!user){
            throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
        }
        return user;
  }
}