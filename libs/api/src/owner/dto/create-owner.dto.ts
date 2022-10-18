import { IOwner } from '@falcon/interfaces';
import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';

export class CreateOwnerDto implements IOwner {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsMobilePhone('en-IN')
  number: string;
}
