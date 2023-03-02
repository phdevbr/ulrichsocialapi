import { Module } from '@nestjs/common';
import { ThoughtService } from './thought.service';
import { ThoughtController } from './thought.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [ThoughtService, PrismaService],
    controllers: [ThoughtController],
})
export class ThoughtModule {}
