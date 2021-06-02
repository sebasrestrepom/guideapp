import { InjectEntityManager } from '@nestjs/typeorm';
import { Question } from 'src/question/model/Question';
import { EntityManager } from 'typeorm';
import { QuestionRepository } from './QuestionRepository';

export class SQLQuestionRepository implements QuestionRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async getAll(): Promise<Question[]> {
    const rows = await this.manager.query(
      `SELECT id, categoryId, vocationId, name FROM question`,
    );
    const result = rows.map(
      (row) => new Question(row.id, row.categoryId, row.vocationId, row.name),
    );
    return Promise.resolve(result);
  }

  async findById(questionId: number): Promise<Question | undefined> {
    const rows = await this.manager.query(
      `SELECT id, categoryId, vocationId, name FROM question WHERE id=$1`,
      [questionId],
    );

    if (rows == undefined || rows.length == 0) {
      return undefined;
    }

    const result = new Question(
      rows[0].id,
      rows[0].categoryId,
      rows[0].vocationId,
      rows[0].name,
    );

    return result;
  }

  async save(question: Question): Promise<Question> {
    const result = await this.manager.query(
      `INSERT INTO question (categoryId,vocationId,name) VALUES ($1,$2,$3)`,
      [question.categoryId, question.vocationId, question.name],
    );
    const newQuestion = new Question(
      result.insertId,
      question.categoryId,
      question.vocationId,
      question.name,
    );
    return newQuestion;
  }
}
