import { Controller } from '@nestjs/common';
import { ApiGymService } from './api-gym.service';

@Controller('api-gym')
export class ApiGymController {
  constructor(private apiGymService: ApiGymService) {}
}
