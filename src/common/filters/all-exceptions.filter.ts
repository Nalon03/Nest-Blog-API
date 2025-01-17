import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const status = exception.getStatus();
    console.log('Exception caught:', exception);

    const message = exception.message || 'Internal server errorrrrr';

    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
