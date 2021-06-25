import { Question } from 'src/core/domain/question/Question';
import { QuestionRepository } from 'src/core/domain/question/QuestionRepository';

export class InMemoryQuestionRepository implements QuestionRepository {
  private _database = new Map<string, Question>();

  getAll(): Promise<Question[]> {
    const list: Question[] = [];

    list.push(new Question(1, 3, 20, 'Te gustan los deportes ?'));

    return Promise.resolve(list);
  }

  findById(questionId: number): Promise<Question> {
    const question = this._database.get(`${questionId}`);

    return Promise.resolve(question);
  }
}
