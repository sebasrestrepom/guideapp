import { Question } from 'src/question/model/Question';

export interface QuestionRepository {
  getAll(): Promise<Question[]>;
}
