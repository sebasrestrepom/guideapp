import { School } from 'src/core/domain/school/School';

export interface SchoolRepository {
  getByCity(cityId: number): Promise<School[]>;
  save(school: School): Promise<School>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<School>;
  update(school: School): Promise<School>;
}
