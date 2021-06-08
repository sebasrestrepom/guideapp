import { School } from 'src/core/domain/school/School';

export interface SchoolRepository {
  getByCity(cityId: number): Promise<School[]>;
  save(school: School): Promise<School>;
  delete(schoolId: number): Promise<void>;
  findById(schoolId: number): Promise<School>;
  update(school: School): Promise<void>;
}
