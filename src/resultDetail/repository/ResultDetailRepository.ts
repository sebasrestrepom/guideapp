import { ResultDetail } from 'src/resultDetail/model/ResultDetail';

export interface ResultDetailRepository {
  save(result: ResultDetail): Promise<ResultDetail>;
}
