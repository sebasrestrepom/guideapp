import { School } from 'src/core/domain/school/School';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';

export class InMemorySchoolRepository implements SchoolRepository {
  private _database = new Map<string, School>();

  update(school: School): Promise<void> {
    this._database.set(`${school.id}`, school);
    return Promise.resolve();
  }

  delete(schoolId: number): Promise<void> {
    this._database.delete(`${schoolId}`);
    return Promise.resolve();
  }

  findById(schoolId: number): Promise<School> {
    const school = this._database.get(`${schoolId}`);

    return Promise.resolve(school);
  }

  save(school: School): Promise<School> {
    const newIndex = this._database.size + 1;
    const newSchool = new School(newIndex, school.cityId, school.name);

    this._database.set(`${newSchool.id}`, newSchool);

    return Promise.resolve(newSchool);
  }

  getByCity(cityId: number): Promise<School[]> {
    const list: School[] = [];

    this._database.forEach((school: School) => {
      if (school.cityId !== cityId) {
        return;
      }

      list.push(school);
    });

    return Promise.resolve(list);
  }
}
