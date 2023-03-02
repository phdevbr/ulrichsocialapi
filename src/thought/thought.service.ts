import { Injectable } from '@nestjs/common';
import { Thought } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateThoughtDTO } from './createThought.dto';

@Injectable()
export class ThoughtService {
    constructor(private prisma: PrismaService) {}

    async getAllThoughts() {
        return await this.prisma.thought.findMany({});
    }
    async createThought(data: CreateThoughtDTO) {
        return await this.prisma.thought.create({
            data,
        });
    }
}
