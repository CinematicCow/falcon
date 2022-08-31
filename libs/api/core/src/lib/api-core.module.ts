import { TypeOrmConfigService } from '@falcon/api/database';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {}
