import { Global, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExistsValidator } from './validator/exists.validator';
import { UniqueValidator } from './validator/unique.validator';
import { TransformInterceptor } from './transformer/transform-interceptor.pipe';
import { TimeoutInterceptor } from './transformer/timeout-interceptor.pipe';

@Global()
@Module({
  providers: [
    UniqueValidator,
    ExistsValidator,
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
  ],
})
export class CommonModule {}
