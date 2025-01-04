import { Test, TestingModule } from '@nestjs/testing';
import { DemoExampleController } from './demo-example.controller';
import { DemoExampleService } from './demo-example.service';

describe('DemoExampleController', () => {
  let demoExampleController: DemoExampleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DemoExampleController],
      providers: [DemoExampleService],
    }).compile();

    demoExampleController = app.get<DemoExampleController>(DemoExampleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(demoExampleController.getHello()).toBe('Hello World!');
    });
  });
});
