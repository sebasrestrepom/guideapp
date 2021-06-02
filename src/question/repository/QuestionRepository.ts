import { Question } from 'src/question/model/Question';

export interface QuestionRepository {
  getAll(): Promise<Question[]>;
  findById(questionId: number): Promise<Question | undefined>;
  save(question: Question): Promise<Question>;
}
