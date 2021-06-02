import { Body, Controller, Post } from '@nestjs/common';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ResultService } from 'src/result/service/ResultService';

class SaveResultResponse {
  id: number;
  studentId: number;
}

class SaveResultRequest {
  @IsNotEmpty()
  @IsNumber()
  studentId: number;
}

@Controller()
export class ResultController {
  constructor(private resultService: ResultService) {}

  @Post('result/save-result')
  async saveResult(
    @Body() request: SaveResultRequest,
  ): Promise<SaveResultResponse> {
    const result = await this.resultService.saveResult(request.studentId);
    return {
      id: result.id,
      studentId: result.studentId,
    };
  }
}
