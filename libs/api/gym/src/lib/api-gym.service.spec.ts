import { Test } from '@nestjs/testing';
import { ApiGymService } from './api-gym.service';

describe('ApiGymService', () => {
  let service: ApiGymService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiGymService],
    }).compile();

    service = module.get(ApiGymService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
