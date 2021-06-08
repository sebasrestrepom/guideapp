import { Question } from 'src/core/domain/question/Question';
import { QuestionRepository } from 'src/core/domain/question/QuestionRepository';

export class InMemoryQuestionRepository implements QuestionRepository {
  getAll(): Promise<Question[]> {
    const list: Question[] = [];

    list.push(new Question(1, 3, 20, 'Te gustan los deportes ?'));

    return Promise.resolve(list);
  }
}
