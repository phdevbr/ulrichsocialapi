import { JwtService } from '@nestjs/jwt';
import { authUser, UserService } from 'src/user/user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<{
        id: string;
        username: string;
    }>;
    login(user: authUser): Promise<{
        acess_token: string;
    }>;
}
