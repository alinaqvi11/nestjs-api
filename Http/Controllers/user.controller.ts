
import { Controller, Post, Body, Get, Put, Delete, Param, Res } from '@nestjs/common';
import { UsersService } from '../../App/Application/Users/user.service';
import User from '../../App/Infrastructure/Model/user.model';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }


    @Get('/')
    async getAll(@Res() res) {

        const user = await this.userService.getUsers();
        res.send({ data: user })

    }

    // @Get(':id')
    // get(@Param() params) {
    //     return this.userService.getUser(params.id);
    // }

    // @Post()
    // create(@Body() user: User) {
    //     return this.userService.createUser(user);
    // }

    // @Put()
    // update(@Body() user: User) {
    //     return this.userService.updateUser(user);
    // }

    // @Delete(':id')
    // deleteUser(@Param() params) {
    //     return this.userService.deleteUser(params.id);
    // }
}