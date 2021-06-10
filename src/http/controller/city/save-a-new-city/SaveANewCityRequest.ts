import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class SaveANewCityRequest {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  departmentId: number;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  code: number;
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
