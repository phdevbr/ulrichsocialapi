import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './createUser.dto';
export type authUser = {
    id: string;
    username: string;
    password: string;
};
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findByUsername(userWhereUnique: Prisma.UserWhereUniqueInput): Promise<User | null>;
    findByUsernameToAuth(userWhereUnique: Prisma.UserWhereUniqueInput): Promise<authUser | null>;
    getUserThoughts(username: Prisma.UserWhereUniqueInput): Promise<{
        thoughts: import("@prisma/client").Thought[];
    }>;
    updateUser(username: string, data: any): Promise<User & {
        followers: User[];
    }>;
    users(): Promise<(User & {
        followers: {
            username: string;
        }[];
        following: {
            username: string;
        }[];
    })[]>;
    createUser(user: CreateUserDTO): Promise<User>;
}
