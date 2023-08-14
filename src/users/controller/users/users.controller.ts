import { Body, Controller, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService
    ){}

    @Get()
    getUsers(){
        return this.userService.findUsers();

    }

    @Post()
    createUsers(@Body() createUserDto: CreateUserDto){
        return this.userService.createUsers(createUserDto);
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto){
        await this.userService.updateUsers(id, updateUserDto);
    }
}
