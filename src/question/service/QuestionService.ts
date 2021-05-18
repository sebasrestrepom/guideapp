import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Question } from 'src/question/model/Question';
import { QuestionRepository } from 'src/question/repository/QuestionRepository';

@Injectable()
export class QuestionService {
  constructor(
    @Inject('QuestionRepository') private questionRepository: QuestionRepository,
  ) {}

  getById(id: number): Promise<Question[]> {
    return this.questionRepository.getById(id);
  }
}
