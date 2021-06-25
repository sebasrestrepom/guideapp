import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Result } from 'src/core/domain/result/Result';
import { ResultRepository } from 'src/core/domain/result/ResultRepository';

export class SQLResultRepository implements ResultRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async save(result: Result): Promise<Result> {
    return await this.manager.transaction(async (txEntityManager) => {
      const {
        insertId: resultId,
      } = await txEntityManager.query(
        `INSERT INTO result (studentId) VALUES ($1)`,
        [result.studentId],
      );
      console.log(`este es id,${result.id}`);
      result.details.forEach(async (detail) => {
        console.log(`este es detail,${detail.resultId}`);
        const {} = await txEntityManager.query(
          `INSERT INTO result_detail (resultId, questionId, value) VALUES ($1, $2, $3)`,
          [detail.resultId, detail.questionId, detail.value],
        );
      });

      return this.findById(resultId);
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

    const result = new Result(rows[0].id, rows[0].resultId, rows[0].details);

    return result;
  }
}
