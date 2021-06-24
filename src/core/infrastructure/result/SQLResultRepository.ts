import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Result, ResultDetail } from 'src/core/domain/result/Result';
import {
  ResultDetailRepository,
  ResultRepository,
} from 'src/core/domain/result/ResultRepository';

export class SQLResultRepository implements ResultRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async save(result: Result): Promise<Result> {
    return await this.manager.transaction(async txEntityManager => {
      const {insertId: resultId} = await txEntityManager.query(
        `INSERT INTO result (studentId) VALUES ($1)`,
        [result.studentId],
      );
      
      result.details.forEach((detail) => {
        const {insertId} = await txEntityManager.query(
          `INSERT INTO result_detail (resultId, questionId, value) VALUES ($1, $2, $3)`,
          [resultId, detail.questionId, detail.value ],
        );
      });

      return this.findById(insertId);
    });
  }

  async findById(resultId: number): Promise<Result | undefined> {
    const rows = await this.manager.query(
      `SELECT id, studentId FROM result WHERE id=$1`,
      [resultId],
    );

    if (rows == undefined || rows.length == 0) {
      return undefined;
    }

    const result = new Result(rows[0].id, rows[0].resultId);

    return result;
  }
}
