import { Test } from '@nestjs/testing';
import { ApiGymController } from './api-gym.controller';
import { ApiGymService } from './api-gym.service';

describe('ApiGymController', () => {
  let controller: ApiGymController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiGymService],
      controllers: [ApiGymController],
    }).compile();

    controller = module.get(ApiGymController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
