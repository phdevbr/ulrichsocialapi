import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Thought } from '@prisma/client';
import { CreateThoughtDTO } from './createThought.dto';
import { ThoughtService } from './thought.service';

@Controller('thoughts')
export class ThoughtController {
    constructor(private readonly thoughtsService: ThoughtService) {}

    @Get()
    @HttpCode(200)
    async getAllThoughts() {
        return await this.thoughtsService.getAllThoughts();
    }
    @Post()
    @HttpCode(200)
    async createThought(@Body() thought: CreateThoughtDTO) {
        return await this.thoughtsService.createThought(thought);
    }
}
