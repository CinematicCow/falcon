import { IGym } from '@falcon/interfaces';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGymDto implements IGym {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  stub: string;
  @IsNotEmpty()
  @IsString()
  location: string;
}
