import { School } from 'src/school/model/School';
import { SchoolRepository } from './SchoolRepository';

export class InMemorySchoolRepository implements SchoolRepository {
  save(school: School): Promise<School> {
    throw new Error('Method not implemented.');
  }
  getByCity(cityId: number): Promise<School[]> {
    const list: School[] = [];

    list.push(new School(1, 3, 'Colegio Teresiano'));

    const response: School[] = list.filter((school) => {
      return school.cityId === cityId;
    });
    return Promise.resolve(response);
  }
}
