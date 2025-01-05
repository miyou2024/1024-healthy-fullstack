import { Test, TestingModule } from '@nestjs/testing';
import { NestExampleController } from './nest-example.controller';
import { NestExampleService } from './nest-example.service';

describe('NestExampleController', () => {
  let nestExampleController: NestExampleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestExampleController],
      providers: [NestExampleService],
    }).compile();

    nestExampleController = app.get<NestExampleController>(NestExampleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestExampleController.getHello()).toBe('Hello World!');
    });
  });
});
