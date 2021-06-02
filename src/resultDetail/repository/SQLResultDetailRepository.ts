import { InjectEntityManager } from '@nestjs/typeorm';
import { ResultDetail } from 'src/resultDetail/model/ResultDetail';
import { EntityManager } from 'typeorm';
import { ResultDetailRepository } from './ResultDetailRepository';

export class SQLResultDetailRepository implements ResultDetailRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async save(result: ResultDetail): Promise<ResultDetail> {
    const sentence = await this.manager.query(
      `INSERT INTO resultDetail (resultId, questionId, value) VALUES ($1,$2,$3)`,
      [result.resultId, result.questionId, result.value],
    );

    const newResult = new ResultDetail(
      sentence.insertId,
      result.resultId,
      result.questionId,
      result.value,
    );
    return newResult;
  }
}
