import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ThoughtModule } from './thought/thought.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
    imports: [PrismaModule, UserModule, ThoughtModule, AuthModule],
    controllers: [AppController],
    providers: [PrismaService],
})
export class AppModule {}
