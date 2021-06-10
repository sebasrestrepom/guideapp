import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class SaveANewSchoolRequest {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  cityId: number;
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
