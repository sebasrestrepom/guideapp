import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class SaveANewStudentRequest {
  @IsNotEmpty()
  @IsNumber()
  schoolId: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
