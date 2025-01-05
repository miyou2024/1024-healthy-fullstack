import { NestFactory } from '@nestjs/core';
import { NestExampleModule } from './nest-example.module';

async function bootstrap() {
  const app = await NestFactory.create(NestExampleModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
