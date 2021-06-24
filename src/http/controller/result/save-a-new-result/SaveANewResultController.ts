import { Body, Controller, Post } from '@nestjs/common';
import { SaveResultResponse, SaveResultDetailResponse } from './SaveANewResultResponse';
import { SaveResultRequest, SaveResultDetailRequest } from './SaveANewResultRequest';
import { SaveANewResult } from 'src/core/use_cases/result/SaveANewResult';
import { ResultDetailService } from 'src/core/use_cases/result/SaveANewResult';

@Controller()
export class ResultController {
  constructor(private saveANewResult: SaveANewResult) {}

  @Post('api/result/save-result')
  async handle(
    @Body() request: SaveResultRequest,
  ): Promise<SaveResultResponse> {
    const result = await this.saveANewResult.execute(request.studentId);
    return {
      id: result.id,
      studentId: result.studentId,
    };

        const result = await this.saveANewResult.execute(
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



