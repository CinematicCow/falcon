import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateGymDto } from './create-gym.dto';

const gym: CreateGymDto = {
  name: 'my gym',
  location: 'some location',
  stub: 'my-gym-1',
};
describe('create gym dto', () => {
  it('should be same interface', () => {
    const ofCreateGymDto = plainToInstance(CreateGymDto, gym);
    expect(ofCreateGymDto instanceof CreateGymDto).toBe(true);
  });

  it('should pass if valid fields', async () => {
    const ofCreateGymDto = plainToInstance(CreateGymDto, gym);
    const errors = await validate(ofCreateGymDto);
    expect(errors.length).toBe(0);
  });

  it('should fail if param is missing', async () => {
    const ofCreateGymDto = plainToInstance(CreateGymDto, {
      name: 'some gym',
      location: 'some location',
    });
    const errors = await validate(ofCreateGymDto);
    expect(errors.length).not.toBe(0);
  });

  it('should fail if param is wrong type', async () => {
    const ofCreateGymDto = plainToInstance(CreateGymDto, {
      name: 'some gym',
      location: 'some location',
      stub: false,
    });
    const errors = await validate(ofCreateGymDto);
    expect(errors.length).not.toBe(0);
  });
});
