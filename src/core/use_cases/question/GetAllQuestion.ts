import { Injectable, Inject } from '@nestjs/common';
import { Question } from 'src/core/domain/question/Question';
import { QuestionRepository } from 'src/core/domain/question/QuestionRepository';

@Injectable()
export class GetAllQuestion {
  constructor(
    @Inject('QuestionRepository')
    private questionRepository: QuestionRepository,
  ) {}

  execute(): Promise<Question[]> {
    return this.questionRepository.getAll();
  }
}
