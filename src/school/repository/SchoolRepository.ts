import { School } from 'src/school/model/School';

export interface SchoolRepository {
  getByCity(cityId: number): Promise<School[]>;
  save(school: School): Promise<School>;
  update(school: School): Promise<School>;
}
