import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    UseGuards,
} from '@nestjs/common';
import { Thought } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateThoughtDTO } from './createThought.dto';
import { ThoughtService } from './thought.service';

@Controller('thoughts')
export class ThoughtController {
    constructor(private readonly thoughtsService: ThoughtService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    @HttpCode(200)
    async getAllThoughts() {
        return await this.thoughtsService.getAllThoughts();
    }
    @UseGuards(JwtAuthGuard)
    @Post()
    @HttpCode(200)
    async createThought(@Body() thought: CreateThoughtDTO) {
        return await this.thoughtsService.createThought(thought);
    }
}
