import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseType } from 'types/response.type';
import { ApiResponse } from '../ApiResponse';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<ResponseType<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<ResponseType<T>>,
  ): Observable<ResponseType<T>> {
    const response = context.switchToHttp().getResponse();
    const statusCode = response.statusCode;

    return next
      .handle()
      .pipe(
        map((response: ResponseType<T>) =>
          ApiResponse.success({ code: statusCode, ...response }),
        ),
      );
  }
}
