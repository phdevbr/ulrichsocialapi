import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    NotFoundException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(_exception: NotFoundException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const req = ctx.getRequest<Request>();
        const res = ctx.getResponse<Response>();
        let new_url = req.url.split('/')[0] + '/';
        return res.redirect(new_url);
    }
}
