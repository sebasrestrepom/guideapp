import { ResultDetail } from 'src/resultDetail/model/ResultDetail';
import { ResultDetailRepository } from './ResultDetailRepository';

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
