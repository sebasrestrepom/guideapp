import { InjectEntityManager } from '@nestjs/typeorm';
import { City } from 'src/model/City';
import { EntityManager } from 'typeorm';
import { CityRepository } from './CityRepository';

export class SQLCityRepository implements CityRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async getByDepartment(departmentId: number): Promise<City[]> {
    const rows = await this.manager.query(
      `SELECT id,departmentId, code, name FROM city WHERE departmentId=?`,
      [departmentId],
    );

    const result = rows.map(
      (row) => new City(row.id, row.departmentId, row.code, row.name),
    );
    return Promise.resolve(result);
  }
}
