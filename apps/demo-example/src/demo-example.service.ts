import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoExampleService {
  getHello(): string {
    return 'Hello World!';
  }
}
