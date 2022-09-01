import { IGym } from '@falcon/interfaces';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';

const createGymDto: CreateGymDto = {
  name: 'gym',
  stub: 'gym-1',
  location: 'gym loc',
  isActive: true,
};

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
            create: jest.fn().mockImplementation((gym: CreateGymDto) => {
              Promise.resolve({ id: 1, ...gym });
            }),

            findAll: jest.fn().mockResolvedValue([
              {
                id: 1,
                name: 'gym',
                stub: 'gym-1',
                location: 'gym loc',
                isActive: true,
              },
              {
                id: 2,
                name: 'gym2',
                stub: 'gym-2',
                location: 'gym 2 loc',
                isActive: false,
              },
            ]),

            findOne: jest.fn().mockImplementation((id: number) => {
              Promise.resolve({
                id,
                name: 'gym',
                stub: 'gym-1',
                location: 'gym loc',
                isActive: true,
              });
            }),
            update: jest
              .fn()
              .mockImplementation((id: number, updateGymDto: UpdateGymDto) => {
                Promise.resolve({ id, name: 'new gym', ...updateGymDto });
              }),
            remove: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    controller = module.get<GymController>(GymController);
    service = module.get<GymService>(GymService);
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a gym', async () => {
      await expect(controller.create(createGymDto)).toEqual({
        id: expect.any(Number),
        ...createGymDto,
      });
      expect(service.create).toHaveBeenCalled();
      expect(service.create).toHaveBeenCalledWith(createGymDto);
    });
    it.todo('add failing test case');
    it.todo('add error test case');
  });

  describe('findAll', () => {
    it.todo('should return an array of gyms');
    // it('should return an array of gyms', async () => {
    //   const result: IGym[] = [];
    //   jest.spyOn(service, 'findAll').mockImplementation(() => result);

    //   expect(await controller.findAll()).toBe(result);
    // });
  });
});
