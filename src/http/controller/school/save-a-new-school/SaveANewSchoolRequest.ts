import { IsNotEmpty, IsNumber } from 'class-validator';

export class SaveANewSchoolRequest {
  @IsNotEmpty()
  @IsNumber()
  cityId: number;
  @IsNotEmpty()
  name: string;
}
