import { Module } from '@nestjs/common';
import { ApiDatabaseService } from './api-database.service';

@Module({
  controllers: [],
  providers: [ApiDatabaseService],
  exports: [ApiDatabaseService],
})
export class ApiDatabaseModule {}
