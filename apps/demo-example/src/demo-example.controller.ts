import { Controller, Get } from '@nestjs/common';
import { DemoExampleService } from './demo-example.service';

@Controller()
export class DemoExampleController {
  constructor(private readonly demoExampleService: DemoExampleService) {}

  @Get()
  getHello(): string {
    return this.demoExampleService.getHello();
  }
}
