import { startApp } from '@ittlr/nestjs-bootstrap';
import { NestFactory } from '@nestjs/core';
import { NestExampleModule } from './nest-example.module';


export const ConfigService = () => {
  const App = {
    Name: 'NestJS Example',
  };
  const Http = {
    Host: 'localhost',
    Port: 3001,
    ApiPrefix: 'nest-example-api',
  };
  const Swagger = {
    Path: 'docs',
    Title: 'NestJS Example Title',
    Desc: 'NestJS Example Description',
  };
  const SkipTokenWhitePath: string[] = [
    // `/${Http.ApiPrefix}/${Http.ConsulCheckApiPath}`
  ];
  return {
    App,
    Http,
    Swagger,
    SkipTokenWhitePath
  };
};


async function bootstrap() {
  const app = await NestFactory.create(NestExampleModule);
  await startApp(app, ConfigService());
}
bootstrap();
