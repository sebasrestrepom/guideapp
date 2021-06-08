import { Question } from 'src/core/domain/question/Question';

export interface QuestionRepository {
  getAll(): Promise<Question[]>;
}
