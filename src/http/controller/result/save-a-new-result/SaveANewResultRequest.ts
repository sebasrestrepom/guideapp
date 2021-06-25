import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';

export class SaveResultRequest {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  studentId: number;

  @IsArray()
  //@MaxLength(600)
  @ApiProperty()
  detail: SaveResultDetailRequest[];
}

export class SaveResultDetailRequest {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  resultId: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  questionId: number;

  @IsNotEmpty()
  @ApiProperty()
  value: string;
}
