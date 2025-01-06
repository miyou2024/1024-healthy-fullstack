import { INestBootstrapOptions } from '@ittlr/nestjs-bootstrap/nestjs-bootstrap.interface';
import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NestjsBootstrapService } from './nestjs-bootstrap.service';

@Module({})
export class NestjsBootstrapModule {
  static register(options?: INestBootstrapOptions): DynamicModule {
    const moduleImports: Promise<DynamicModule>[] = [];
    const providerImports: Provider[] = [];
    const exportImports = [];
    if (options) {
      if (options.configOptions && options.configOptions.constructor === Object) {
        if (Object.keys(options.configOptions).length) {
          const configImportModule = ConfigModule.forRoot({
            isGlobal: true,
            ...options.configOptions,
          });
          moduleImports.push(configImportModule);
        }
      }
    }
    return {
      global: true,
      module: NestjsBootstrapModule,
      imports: [
        ...moduleImports,
      ],
      providers: [NestjsBootstrapService],
      exports: [NestjsBootstrapService],
    };
  }
}
