import { Controller, Post, Body, Get, Put, Delete, Param, Res, Req, Query } from '@nestjs/common';
import { UserService } from '../../App/Application/User/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/login')
    async login(@Res() res, @Body() body) {
        const { email, password } = body;
        const user = await this.userService.login(email, password)
        res.send(user)
    }

    @Post('/signup')
    async createUser(@Res() res, @Body() body) {
        const user = await this.userService.createUser(body)
        res.send(user);
    }
}