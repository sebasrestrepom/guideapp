import { IsNotEmpty, IsNumber } from 'class-validator';

export class SaveANewCityRequest {
  @IsNotEmpty()
  @IsNumber()
  departmentId: number;
  @IsNotEmpty()
  @IsNumber()
  code: number;
  @IsNotEmpty()
  name: string;
}
