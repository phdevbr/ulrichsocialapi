import {
    Controller,
    Request,
    Post,
    UseGuards,
    HttpCode,
    Get,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @Get()
    home() {
        return {
            message:
                'This is the home of the api, please go to /users or /thoughts. Obs: You may have been redirected from a 404 route',
        };
    }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
