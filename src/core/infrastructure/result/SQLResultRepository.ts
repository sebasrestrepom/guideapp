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
    const sentence = await this.manager.query(
      `INSERT INTO result (studentId) VALUES ($1)`,
      [result.studentId],
    );

    const newResult = new Result(sentence.insertId, result.studentId);
    return newResult;
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
