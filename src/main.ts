import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { NestHttpExceptionFilter } from 'modules/common/filters/http-exception.filter';
import { TrimStringsPipe } from './modules/common/transformer/trim-strings.pipe';
import { AppModule } from './modules/main/app.module';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.enableCors();
  app.useGlobalPipes(new TrimStringsPipe(), new ValidationPipe());
  app.useGlobalFilters(new NestHttpExceptionFilter());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(3600);
}
bootstrap();
