import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    home(): {
        message: string;
    };
    login(req: any): Promise<{
        acess_token: string;
    }>;
}
