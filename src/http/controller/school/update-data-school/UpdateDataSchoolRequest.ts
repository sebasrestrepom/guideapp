import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateDataSchoolRequest {
  @IsNotEmpty()
  @IsNumber()
  cityId: number;
  @IsNotEmpty()
  name: string;
}
