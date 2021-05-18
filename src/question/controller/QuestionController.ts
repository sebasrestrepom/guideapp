import { Controller, Get } from '@nestjs/common';
import { QuestionService } from 'src/question/service/QuestionService';

class GetAllResponse {
  id: number;
  categoryId: number;
  vocationId: number;
  name: string;
}

@Controller()
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get('question/get-all')
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
