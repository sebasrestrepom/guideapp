import { Result, ResultDetail } from './Result';

export interface ResultRepository {
  save(result: Result): Promise<Result>;
  findById(resultId: number): Promise<Result | undefined>;
}

export interface ResultDetailRepository {
  save(result: ResultDetail): Promise<ResultDetail>;
}
