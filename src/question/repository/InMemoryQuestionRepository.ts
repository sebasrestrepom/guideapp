import { Question } from 'src/question/model/Question';
import { QuestionRepository } from './QuestionRepository';

export class InMemoryQuestionRepository implements QuestionRepository {
  getAll(): Promise<Question[]> {
    const list: Question[] = [];

    list.push(new Question(1, 3, 20, 'Te gustan los deportes ?'));

    return Promise.resolve(list);
  }
}
