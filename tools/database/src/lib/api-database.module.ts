import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './api-database.service';

@Module({
  providers: [TypeOrmConfigService],
  exports: [TypeOrmConfigService],
})
export class ApiDatabaseModule {}
