import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './createUser.dto';
import { hash } from 'bcrypt';

export type authUser = {
    id: string;
    username: string;
    password: string;
};

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findByUsername(
        userWhereUnique: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUnique,
            include: {
                followers: { select: { username: true } },
                following: { select: { username: true } },
            },
        });
    }

    async findByUsernameToAuth(
        userWhereUnique: Prisma.UserWhereUniqueInput,
    ): Promise<authUser | null> {
        return this.prisma.user.findUnique({
            where: userWhereUnique,
            select: {
                id: true,
                username: true,
                password: true,
            },
        });
    }
    async getUserThoughts(username: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.findUnique({
            where: username,
            select: { thoughts: true },
        });
    }
    async users() {
        return this.prisma.user.findMany({
            include: {
                followers: { select: { username: true } },
                following: { select: { username: true } },
            },
        });
    }

    async createUser(user: CreateUserDTO): Promise<User> {
        const saltsOrRounds = 10;
        const hashedpassword = await hash(user.password, saltsOrRounds);
        return this.prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: hashedpassword,
            },
        });
    }
}
