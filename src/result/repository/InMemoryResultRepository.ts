import { Result } from 'src/result/model/Result';
import { ResultRepository } from './ResultRepository';

export class InMemoryResultRepository implements ResultRepository {
  private _database = new Map<string, Result>();

  save(result: Result): Promise<Result> {
    const newIndex = this._database.size + 1;
    const newResult = new Result(newIndex, result.studentId);

    this._database.set(`${newResult.id}`, newResult);

    return Promise.resolve(newResult);
  }
  findById(resultId: number): Promise<Result | undefined> {
    const result = this._database.get(`${resultId}`);

    return Promise.resolve(result);
  }
}
