import { Question } from 'src/question/model/Question';
import { QuestionRepository } from './QuestionRepository';

export class InMemoryQuestionRepository implements QuestionRepository {
  getById(id: number): Promise<Question[]> {
    const list: Question[] = [];

    list.push(new Question(1, 4, 9, '¿Te gustan los deportes?'));

    const response: Question[] = list.filter((question) => {
      return question.id === id;
    });

    return Promise.resolve(response);
  }
}
