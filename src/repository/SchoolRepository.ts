import { School } from 'src/model/School';

export interface SchoolRepository {
  getByCity(cityId: number): Promise<School[]>;
}