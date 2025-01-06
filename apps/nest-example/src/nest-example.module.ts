import { initGlobalConfig, NestjsBootstrapModule } from '@ittlr/nestjs-bootstrap';
import { Module } from '@nestjs/common';
import { NestExampleController } from './nest-example.controller';
import { NestExampleService } from './nest-example.service';

@Module({
  imports: [
    NestjsBootstrapModule.register({
      configOptions: {
        load: [initGlobalConfig],
      },
    })
  ],
  controllers: [NestExampleController],
  providers: [NestExampleService],
})
export class NestExampleModule {}
