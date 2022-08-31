import { Test, TestingModule } from '@nestjs/testing';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';
import { Gym } from './entities/gym.entity';
import { UpdateGymDto } from './dto/update-gym.dto';
import { CreateGymDto } from './dto/create-gym.dto';

// test values
const gyms: Gym[] = [
  {
    id: 1,
    isActive: true,
    location: 'some location',
    name: 'gym',
    stub: 'gym-1',
  },
  {
    id: 2,
    isActive: true,
    location: 'some location',
    name: 'gym',
    stub: 'gym-2',
  },
  {
    id: 3,
    isActive: false,
    location: 'some location',
    name: 'gym',
    stub: 'gym-3',
  },
];

describe('GymController', () => {
  let controller: GymController;
  let service: GymService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymController],
      providers: [
        {
          provide: GymService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(gyms),
            findOne: jest.fn().mockImplementation((id: number) => {
              Promise.resolve(gyms[id]);
            }),
            update: jest
              .fn()
              .mockImplementation((id: number, gym: UpdateGymDto) => {
                Promise.resolve((gyms[id].name = gym.name));
              }),
            create: jest.fn().mockImplementation((gym: CreateGymDto) => {
              Promise.resolve({ id: 4, ...gym });
            }),
            remove: jest.fn().mockResolvedValue({ deleted: true }),
          },
        },
      ],
    }).compile();

    controller = module.get<GymController>(GymController);
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getGyms', () => {
    it('should get an array of gyms', async () => {
      await expect(controller.findAll()).resolves.toEqual(gyms);
    });
    it.todo('test with auth guards');
  });

  describe('getOne', () => {
    it('should get a single gym', async () => {
      await expect(controller.findOne(1)).resolves.toEqual(gyms[1]);
    });
    it.todo('test with auth guards');
  });

  describe('updateGym', () => {
    it.todo;
  });
});
