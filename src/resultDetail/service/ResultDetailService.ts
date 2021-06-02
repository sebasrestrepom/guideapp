import { Injectable, Inject } from '@nestjs/common';
import { ResultDetail } from 'src/resultDetail/model/ResultDetail';
import { ResultDetailRepository } from 'src/resultDetail/repository/ResultDetailRepository';
import { ResultRepository } from 'src/result/repository/ResultRepository';
import { QuestionRepository } from 'src/question/repository/QuestionRepository';

@Injectable()
export class ResultDetailService {
  constructor(
    @Inject('ResultDetailRepository')
    private resultDetailRepository: ResultDetailRepository,
    @Inject('ResultRepository') private resultRepository: ResultRepository,
    @Inject('QuestionRepository')
    private questionRepository: QuestionRepository,
  ) {}

  async saveResult(
    resultId: number,
    questionId: number,
    value: string,
  ): Promise<ResultDetail> {
    const result = new ResultDetail(undefined, resultId, questionId, value);
    const resultValidate = await this.resultRepository.findById(resultId);
    if (resultValidate === undefined) {
      throw new Error('Error, Result not found');
    }
    const questionValidate = await this.questionRepository.findById(questionId);
    if (questionValidate === undefined) {
      throw new Error('Error, Question not found');
    }
    return this.resultDetailRepository.save(result);
  }
}
