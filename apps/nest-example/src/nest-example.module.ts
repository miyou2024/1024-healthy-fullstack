import { Module } from '@nestjs/common';
import { NestExampleController } from './nest-example.controller';
import { NestExampleService } from './nest-example.service';

@Module({
  imports: [],
  controllers: [NestExampleController],
  providers: [NestExampleService],
})
export class NestExampleModule {}
