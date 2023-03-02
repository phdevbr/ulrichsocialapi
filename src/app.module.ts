import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ThoughtModule } from './thought/thought.module';

@Module({
  imports: [PrismaModule, UserModule, ThoughtModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
