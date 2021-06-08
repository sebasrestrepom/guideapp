import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { QuestionService } from 'src/question/service/QuestionService';

class GetAllResponse {
  id: number;
  categoryId: number;
  vocationId: number;
  name: string;
}

@ApiTags('Question')
@Controller()
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get('question/get-all')
  @ApiOperation({ summary: 'List of all vocational test questions' })
  async getAll(): Promise<GetAllResponse[]> {
    const questions = await this.questionService.getAll();

    const response: GetAllResponse[] = questions.map((question) => {
      return {
        id: question.id,
        categoryId: question.categoryId,
        vocationId: question.vocationId,
        name: question.name,
      };
    });
    return response;
  }
}
