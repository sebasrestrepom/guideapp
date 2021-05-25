// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .setTitle('GuideApp')
    .setDescription('Test vocacional')
    .setVersion('1.0')
    .addTag('Vocational test')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('swagger', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
