import { Injectable, Inject } from '@nestjs/common';
import { Question } from 'src/question/model/Question';
import { QuestionRepository } from 'src/question/repository/QuestionRepository';

@Injectable()
export class QuestionService {
  constructor(
    @Inject('QuestionRepository')
    private questionRepository: QuestionRepository,
  ) {}

  getAll(): Promise<Question[]> {
    return this.questionRepository.getAll();
  }
}
