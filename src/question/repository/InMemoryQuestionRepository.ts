import { Question } from 'src/question/model/Question';
import { QuestionRepository } from './QuestionRepository';

export class InMemoryQuestionRepository implements QuestionRepository {
  private _database = new Map<string, Question>();
  getAll(): Promise<Question[]> {
    const list: Question[] = [];

    list.push(new Question(1, 3, 20, 'Te gustan los deportes ?'));

    return Promise.resolve(list);
  }

  findById(questionId: number): Promise<Question | undefined> {
    const question = this._database.get(`${questionId}`);

    return Promise.resolve(question);
  }

  save(question: Question): Promise<Question> {
    const newIndex = this._database.size + 1;
    const newQuestion = new Question(
      newIndex,
      question.categoryId,
      question.vocationId,
      question.name,
    );

    this._database.set(`${newQuestion.id}`, newQuestion);
    return Promise.resolve(newQuestion);
  }
}
