import { Body, Controller, Post } from '@nestjs/common';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ResultDetailService } from 'src/resultDetail/service/ResultDetailService';

class SaveResultDetailResponse {
  id: number;
  resultId: number;
  questionId: number;
  value: string;
}

class SaveResultDetailRequest {
  @IsNotEmpty()
  @IsNumber()
  resultId: number;
  @IsNotEmpty()
  @IsNumber()
  questionId: number;
  @IsNotEmpty()
  value: string;
}

@Controller()
export class ResultDetailController {
  constructor(private resultDetailService: ResultDetailService) {}

  @Post('resultDetail/save-result')
  async saveResult(
    @Body() request: SaveResultDetailRequest,
  ): Promise<SaveResultDetailResponse> {
    const result = await this.resultDetailService.saveResult(
      request.resultId,
      request.questionId,
      request.value,
    );
    return {
      id: result.id,
      resultId: result.resultId,
      questionId: result.questionId,
      value: result.value,
    };
  }
}
