import { Question } from 'src/question/model/Question';

export interface QuestionRepository {
  getById(id: number): Promise<Question[]>;
}
