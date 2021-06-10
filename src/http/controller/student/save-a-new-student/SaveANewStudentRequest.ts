import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class SaveANewStudentRequest {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  schoolId: number;
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
