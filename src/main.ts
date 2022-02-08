import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//cria um server recebendo um módulo de aplicação, podem ser passadas algumas opções
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
