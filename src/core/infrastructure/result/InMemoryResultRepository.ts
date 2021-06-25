import { Result } from 'src/core/domain/result/Result';
import { ResultDetail } from 'src/core/domain/result/ResultDetail';
import {
  ResultRepository,
  ResultDetailRepository,
} from 'src/core/domain/result/ResultRepository';

export class InMemoryResultRepository implements ResultRepository {
  private _database = new Map<string, Result>();

  save(result: Result): Promise<Result> {
    const newIndex = this._database.size + 1;
    const newResult = new Result(newIndex, result.studentId, result.details);
    this._database.set(`${newResult.id}`, newResult);

    return Promise.resolve(newResult);
  }

  findById(resultId: number): Promise<Result | undefined> {
    const result = this._database.get(`${resultId}`);

    return Promise.resolve(result);
  }
}

export class InMemoryResultDetailRepository implements ResultDetailRepository {
  private _database = new Map<string, ResultDetail>();

  save(result: ResultDetail): Promise<ResultDetail> {
    const newIndex = this._database.size + 1;
    const newResult = new ResultDetail(
      newIndex,
      result.resultId,
      result.questionId,
      result.value,
    );

    this._database.set(`${newResult.id}`, newResult);

    return Promise.resolve(newResult);
  }
}
