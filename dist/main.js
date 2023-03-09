"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const notFound_exceptionFilter_1 = require("./notFound.exceptionFilter");
const prisma_service_1 = require("./prisma/prisma.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new notFound_exceptionFilter_1.NotFoundExceptionFilter());
    app.enableCors();
    await app.listen(8000);
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
}
bootstrap();
//# sourceMappingURL=main.js.map