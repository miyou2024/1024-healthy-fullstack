import { NestFactory } from '@nestjs/core';
import { DemoExampleModule } from './demo-example.module';

async function bootstrap() {
  const app = await NestFactory.create(DemoExampleModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
