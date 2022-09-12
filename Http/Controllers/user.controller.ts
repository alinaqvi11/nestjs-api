import { Controller, Post, Body, Res } from '@nestjs/common';
import { UserService } from '../../App/Application/User/User.service';
import HttpResponse from 'Http/Utils/HttpResponse';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/login')
    async login(@Res() res, @Body() body) {
        const { email, password } = body;
        const user = await this.userService.login(email, password)
        HttpResponse.convertToExpress(res, user)
    }

    @Post('/signup')
    async createUser(@Res() res, @Body() body) {
        const user = await this.userService.createUser(body)
        HttpResponse.convertToExpress(res, user)
    }
}