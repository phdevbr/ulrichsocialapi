import { ArgumentsHost, ExceptionFilter, NotFoundException } from '@nestjs/common';
export declare class NotFoundExceptionFilter implements ExceptionFilter {
    catch(_exception: NotFoundException, host: ArgumentsHost): void;
}
