import { Controller, Get } from '@nestjs/common';
import { GetAllQuestion } from 'src/core/use_cases/question/GetAllQuestion';
import { GetAllQuestionResponse } from './GetAllQuestionResponse';

@Controller()
export class GetAllQuestionController {
  constructor(private getAllQuestion: GetAllQuestion) {}

  @Get('question/get-all')
  async handle(): Promise<GetAllQuestionResponse[]> {
    const questions = await this.getAllQuestion.execute();

    const response: GetAllQuestionResponse[] = questions.map((question) => {
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
