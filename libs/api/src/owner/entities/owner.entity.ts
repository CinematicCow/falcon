import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'gym' })
export class Owner {
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
  number: number;

  @Column({ default: false })
  isEmailVerified: boolean;
}
