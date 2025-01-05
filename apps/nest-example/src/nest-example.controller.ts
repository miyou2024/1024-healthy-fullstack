import { Controller, Get } from '@nestjs/common';
import { NestExampleService } from './nest-example.service';

@Controller()
export class NestExampleController {
  constructor(private readonly nestExampleService: NestExampleService) {}

  @Get()
  getHello(): string {
    return this.nestExampleService.getHello();
  }
}
