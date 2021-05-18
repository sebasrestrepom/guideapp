import { Controller, Get, Param } from '@nestjs/common';
import { QuestionService } from 'src/question/service/QuestionService';

class GetByIdResponse {
  id: number;
  categoryId: number;
  vocationId: number;
  name: string;
}

@Controller()
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get('question/get-by-id/:id')
  async getById(@Param('id') id: string): Promise<GetByIdResponse[]> {
    const questions = await this.questionService.getById(parseInt(id, 10));

    const response: GetByIdResponse[] = questions.map((question) => {
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
