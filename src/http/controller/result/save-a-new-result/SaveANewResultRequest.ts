import { IsNotEmpty, IsNumber } from "class-validator";

export class SaveResultRequest {
  @IsNotEmpty()
  @IsNumber()
  studentId: number;
}

export class SaveResultDetailRequest {
  @IsNotEmpty()
  @IsNumber()
  resultId: number;
  @IsNotEmpty()
  @IsNumber()
  questionId: number;
  @IsNotEmpty()
  value: string;
}
