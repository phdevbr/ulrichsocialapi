import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    Post,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { CreateUserDTO } from './createUser.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':username')
    @HttpCode(200)
    async getUserByUsername(
        @Param('username') username: string,
    ): Promise<UserModel> {
        if (await this.userService.findByUsername({ username }))
            return await this.userService.findByUsername({ username });
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    @Get(':username/thoughts')
    @HttpCode(200)
    async getUserThoughts(@Param('username') username: string) {
        return await this.userService.getUserThoughts({ username });
    }
    @Get()
    @HttpCode(200)
    async getAllUsers() {
        console.log(process.env.JWT_SECRET_KEY);
        return await this.userService.users();
    }
    @Post()
    @HttpCode(200)
    async createUser(@Body() user: CreateUserDTO) {
        return await this.userService.createUser(user);
    }
}
