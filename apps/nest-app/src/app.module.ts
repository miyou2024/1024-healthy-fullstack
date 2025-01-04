import { NestjsBootstrapModule } from '@ittlr/nestjs-bootstrap'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    NestjsBootstrapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
