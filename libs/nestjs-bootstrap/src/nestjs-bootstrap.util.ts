import { INestApplication, Logger, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigModule, ConfigService } from "@nestjs/config";
import cookieParser from "cookie-parser";
import dayjs from "dayjs";
import { ISequelizeOptions, ISwaggerOptions } from "./nestjs-bootstrap.interface";
import * as yaml from "js-yaml";
import { readFileSync } from "fs";
import bodyParser from 'body-parser';


export async function startApp(app: INestApplication, serviceConfig: any) {
  // 获取配置实例
  const configService = app.get(ConfigService);

  const serverConfig = configService.get('server', {
    infer: true
  });
  app.setGlobalPrefix(serviceConfig.Http.ApiPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  app.use(bodyParser.json({
    limit: '10mb'
  }));

  // 开启跨域 tmp
  app.enableCors({});

  // 开启 cookie
  app.use(cookieParser());

  // [${await nodeGetPublicIp()}:${serviceConfig.Http.Port}]
  enableSwagger(app, {
    path: serviceConfig.Swagger.Path,
    titleParam: serviceConfig.Swagger.Title,
    descriptionParam: `
    ${ serviceConfig.Swagger.Desc }
    [nodeEnv=${ serverConfig.nodeEnv }]
    [cloudEnv=${ serverConfig.cloudEnv }]
    `,
    versionParam: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  });
  await app.listen(serviceConfig.Http.Port);
  Logger.log(
    `🚀 Application ${ serviceConfig.Swagger.Title } Server is running on: http://localhost:${ serviceConfig.Http.Port }/${ serviceConfig.Http.ApiPrefix }`
  );
  Logger.log(
    `🚀 Application ${ serviceConfig.Swagger.Title } Docs is running on: http://localhost:${ serviceConfig.Http.Port }/docs`
  );
}


/**
 * @author silence
 * 配置 Swagger
 * @param app 应用实例
 * @param options 配置参数
 * @return app 应用实例
 */
export function enableSwagger(app: INestApplication, options: ISwaggerOptions) {
  let swaggerBuild = new DocumentBuilder()
  .setTitle(options.titleParam)
  .setDescription(options.descriptionParam)
  .setVersion(options.versionParam);
  if (options.tagParam) {
    swaggerBuild = swaggerBuild.addTag(options.tagParam?.name, options.tagParam?.description, options.tagParam?.externalDocs);
  }
  swaggerBuild = swaggerBuild.addCookieAuth();
  const swaggerConfig = swaggerBuild.build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(options.path, app, document);

  return app;
}

export function initGlobalConfig() {
  const YAML_CONFIG_FILENAME = 'config.yaml';

//  const YAML_FILE_PATH = join(__dirname, YAML_CONFIG_FILENAME);
//   console.log(process.env);
  const YAML_FILE_PATH = `${process.env['PWD'] || process.env['NX_WORKSPACE_ROOT']}/${YAML_CONFIG_FILENAME}`;
  console.info(`YAML_FILE_PATH`, YAML_FILE_PATH);

  return yaml.load(
    readFileSync(YAML_FILE_PATH, 'utf8'),
  ) as Record<string, any>;
}

