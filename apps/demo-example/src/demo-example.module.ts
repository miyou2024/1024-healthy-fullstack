import { Module } from '@nestjs/common';
import { DemoExampleController } from './demo-example.controller';
import { DemoExampleService } from './demo-example.service';

@Module({
  imports: [],
  controllers: [DemoExampleController],
  providers: [DemoExampleService],
})
export class DemoExampleModule {}
