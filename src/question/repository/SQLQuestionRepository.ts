import { InjectEntityManager } from '@nestjs/typeorm';
import { Question } from 'src/question/model/Question';
import { EntityManager } from 'typeorm';
import { QuestionRepository } from './QuestionRepository';

export class SQLQuestionRepository implements QuestionRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async getById(id: number): Promise<Question[]> {
    const rows = await this.manager.query(
      `SELECT id, categoryId, vocationId, name FROM question WHERE id=?`,
      [id],
    );

    const result = rows.map(
      (row) => new Question(row.id, row.categoryId, row.vocationId, row.name),
    );
    return Promise.resolve(result);
  }
}
