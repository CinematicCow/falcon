import { IGym } from '@falcon/interfaces';

export class Gym implements IGym {
  id: number;
  name: string;
  stub: string;
  location: string;
  isActive: boolean;
}
