import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../database/database.service';
import { OwnerModule } from '../owner/owner.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    OwnerModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiModule {}
