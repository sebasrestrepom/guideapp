import { Result } from './Result';
import { ResultDetail } from './ResultDetail';

export interface ResultRepository {
  save(result: Result): Promise<Result>;
  findById(resultId: number): Promise<Result | undefined>;
}

export interface ResultDetailRepository {
  save(result: ResultDetail): Promise<ResultDetail>;
}
