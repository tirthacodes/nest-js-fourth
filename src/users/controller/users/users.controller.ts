import { Body, Controller, Get, Post, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
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

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        await this.userService.deleteUsers(id);
    }

    @Post(':id/profiles')
    createUserProfiles(@Param('id', ParseIntPipe) id: number, @Body() createUserProfileDto: CreateUserProfileDto){
        return this.userService.createUserProfile(id, createUserProfileDto)
    }

    @Post(':id/posts')
    createUserPost(@Param('id', ParseIntPipe) id: number, @Body() createUserPostDto: CreateUserPostDto){
        return this.userService.createUserPost(id, createUserPostDto);
    }
}
