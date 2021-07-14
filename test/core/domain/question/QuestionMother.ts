import { Question } from 'src/core/domain/question/Question';

export class QuestionMother {
  static createAnQuestion(): Question {
    return new Question(20, 2, 2, 'Random Text');
  }
}
