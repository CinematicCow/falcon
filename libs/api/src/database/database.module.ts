import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './database.service';

@Module({
  providers: [TypeOrmConfigService],
  exports: [TypeOrmConfigService],
})
export class DatabaseModule {}
