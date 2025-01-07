import { Test, TestingModule } from '@nestjs/testing';
import { NestjsPassportService } from './nestjs-passport.service';

describe('NestjsPassportService', () => {
  let service: NestjsPassportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsPassportService],
    }).compile();

    service = module.get<NestjsPassportService>(NestjsPassportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
