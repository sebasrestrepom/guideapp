import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Result } from 'src/core/domain/result/Result';
import { ResultRepository } from 'src/core/domain/result/ResultRepository';

export class SQLResultRepository implements ResultRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async save(result: Result): Promise<Result> {
    const query2 = await this.manager.query(
      `INSERT INTO resultg (studentId) VALUES ($1)`,
      [result.studentId],
    );

    console.log('quexxxxxxxry', query2);
    return undefined;

    /*
    return await this.manager.transaction(async (txEntityManager) => {
      const query2 = await txEntityManager.query(
        `INSERT INTO result (studentId) VALUES ($1)`,
        [result.studentId],
      );

      console.log('query', query2);

      /* for (let i = 0; i < result.details.length; i++) {
        const detail = result.details[i];
        await txEntityManager.query(
          `INSERT INTO resultDetail (resultId, questionId, value) VALUES ($1, $2, $3)`,
          [undefined, detail.questionId, detail.value],
        );
      }

      return this.findById(result.id);
    });*/
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
