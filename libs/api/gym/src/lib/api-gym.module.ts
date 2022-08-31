import { Module } from '@nestjs/common';
import { ApiGymController } from './api-gym.controller';
import { ApiGymService } from './api-gym.service';

@Module({
  controllers: [ApiGymController],
  providers: [ApiGymService],
  exports: [ApiGymService],
})
export class ApiGymModule {}
