import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
     /**
      * TODO: fix localhost from env.
      * Mysql Database is not connecting if localhost is being injected by
      * the env file, but working if we manually set host to either
      * "localhost" or "127.0.0.1"
      */
      host: '127.0.0.1',
      port: this.configService.get<number>('database_port'),
      username: this.configService.get<string>('database_username'),
      password: this.configService.get<string>('database_password'),
      database: this.configService.get<string>('database_name'),
      synchronize: true,
      logging: this.configService.get<string>('NODE_ENV') != 'production',
      autoLoadEntities: true,
    };
  }
}
