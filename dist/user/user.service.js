"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt_1 = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByUsername(userWhereUnique) {
        return this.prisma.user.findUnique({
            where: userWhereUnique,
            include: {
                followers: { select: { username: true } },
                following: { select: { username: true } },
            },
        });
    }
    async findByUsernameToAuth(userWhereUnique) {
        return this.prisma.user.findUnique({
            where: userWhereUnique,
            select: {
                id: true,
                username: true,
                password: true,
            },
        });
    }
    async getUserThoughts(username) {
        return this.prisma.user.findUnique({
            where: username,
            select: { thoughts: true },
        });
    }
    async updateUser(username, data) {
        return this.prisma.user.update({
            where: {
                username,
            },
            include: {
                followers: true,
            },
            data,
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
    async createUser(user) {
        const saltsOrRounds = 10;
        const hashedpassword = await (0, bcrypt_1.hash)(user.password, saltsOrRounds);
        return this.prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: hashedpassword,
            },
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map