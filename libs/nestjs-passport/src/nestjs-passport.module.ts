import { Module } from '@nestjs/common';
import { NestjsPassportService } from './nestjs-passport.service';

@Module({
  providers: [NestjsPassportService],
  exports: [NestjsPassportService],
})
export class NestjsPassportModule {}
