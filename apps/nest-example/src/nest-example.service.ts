import { Injectable } from '@nestjs/common';

@Injectable()
export class NestExampleService {
  getHello(): string {
    return 'Hello World!';
  }
}
