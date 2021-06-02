import { Result } from 'src/result/model/Result';

export interface ResultRepository {
  save(result: Result): Promise<Result>;
  findById(resultId: number): Promise<Result | undefined>;
}
