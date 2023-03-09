import { Thought } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateThoughtDTO } from './createThought.dto';
export declare class ThoughtService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllThoughts(): Promise<Thought[]>;
    createThought(data: CreateThoughtDTO): Promise<Thought>;
}
