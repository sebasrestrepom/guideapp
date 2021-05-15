import { InjectEntityManager } from '@nestjs/typeorm';
import { School } from 'src/school/model/School';
import { EntityManager } from 'typeorm';
import { SchoolRepository } from './SchoolRepository';

export class SQLSchoolRepository implements SchoolRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) { }

  async save(school: School): Promise<School> {
    const result = await this.manager.query(
      `INSERT INTO school (cityId,name) VALUES (?,?)`,
      [school.cityId, school.name],
    );
    const newSchool = new School(result.insertId, school.cityId, school.name);
    return newSchool;
  }

  async getByCity(cityId: number): Promise<School[]> {
    const rows = await this.manager.query(
      `SELECT id,cityId, name FROM school WHERE cityId=?`,
      [cityId],
    );

    const result = rows.map((row) => new School(row.id, row.cityId, row.name));
    return Promise.resolve(result);
  }
}
