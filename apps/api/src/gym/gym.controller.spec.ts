import { Test, TestingModule } from '@nestjs/testing';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';
import { Gym } from './entities/gym.entity';

describe('GymController', () => {
  let controller: GymController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymController],
      providers: [
        {
          provide: GymService,
          useValue: {
            findAll: jest
              .fn()
              .mockReturnValue([
                new Gym(1, 'my-gym', 'some-location'),
                new Gym(2, 'new gym', 'some new location'),
              ]),
            findOne: jest
              .fn()
              .mockReturnValue(new Gym(1, 'my-gym', 'some-location')),
            create: jest
              .fn()
              .mockReturnValue(new Gym(3, 'wow gym', 'wow location')),
            remove: jest.fn().mockReturnValue(true),
          },
        },
      ],
    }).compile();

    controller = module.get<GymController>(GymController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllGyms', () => {
    it('should get an array of gyms', () => {
      const retGym = controller.findAll();
      expect(typeof retGym).toBe('object');
      expect(retGym[0].id).toBe('object');
    });
  });
});
