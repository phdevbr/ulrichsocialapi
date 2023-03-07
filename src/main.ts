import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotFoundExceptionFilter } from './notFound.exceptionFilter';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new NotFoundExceptionFilter());
    app.enableCors();
    await app.listen(8000);
    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);
}
bootstrap();
