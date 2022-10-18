import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IOwner } from '@falcon/interfaces';

@Entity({ schema: 'gym' })
export class Owner implements IOwner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  number: string;

  @Column({ default: false })
  isEmailVerified?: boolean;
}
