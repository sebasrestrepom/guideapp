import { Body, Controller, Post } from '@nestjs/common';
import { SaveResultResponse } from './SaveANewResultResponse';
import { SaveResultRequest } from './SaveANewResultRequest';
import { SaveANewResult } from 'src/core/use_cases/result/SaveANewResult';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Result')
@Controller()
export class SaveANewResultController {
  constructor(private saveANewResult: SaveANewResult) {}

  @Post('api/result/save-result')
  @ApiOperation({ summary: 'Creation of a new result' })
  async handle(
    @Body() request: SaveResultRequest,
  ): Promise<SaveResultResponse> {
    const result = await this.saveANewResult.execute(
      request.studentId,
      request.detail,
    );

    return {
      id: result.id,
      studentId: result.studentId,
      detail: result.details,
    };
  }
}
