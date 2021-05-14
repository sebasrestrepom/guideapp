import { InjectEntityManager } from '@nestjs/typeorm';
import { School } from 'src/model/School';
import { EntityManager } from 'typeorm';
import { SchoolRepository } from './SchoolRepository';

export class SQLSchoolRepository implements SchoolRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async getByCity(cityId: number): Promise<School[]> {
    const rows = await this.manager.query(
      `SELECT id,cityId, name FROM school WHERE cityId=?`,
      [cityId],
    );

    const result = rows.map((row) => new School(row.id, row.cityId, row.name));
    return Promise.resolve(result);
  }
}
