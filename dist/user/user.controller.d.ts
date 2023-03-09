import { User as UserModel } from '@prisma/client';
import { CreateUserDTO } from './createUser.dto';
import { UserService } from './user.service';
type Id = {
    userId: string;
};
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserByUsername(username: string): Promise<UserModel>;
    getUserThoughts(username: string): Promise<{
        thoughts: import("@prisma/client").Thought[];
    }>;
    getAllUsers(): Promise<(UserModel & {
        followers: {
            username: string;
        }[];
        following: {
            username: string;
        }[];
    })[]>;
    createUser(user: CreateUserDTO): Promise<UserModel>;
    addFollower(username: string, userId: Id): Promise<UserModel>;
}
export {};
