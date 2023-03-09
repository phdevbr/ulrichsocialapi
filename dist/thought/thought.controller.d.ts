import { Thought } from '@prisma/client';
import { CreateThoughtDTO } from './createThought.dto';
import { ThoughtService } from './thought.service';
export declare class ThoughtController {
    private readonly thoughtsService;
    constructor(thoughtsService: ThoughtService);
    getAllThoughts(): Promise<Thought[]>;
    createThought(thought: CreateThoughtDTO): Promise<Thought>;
}
