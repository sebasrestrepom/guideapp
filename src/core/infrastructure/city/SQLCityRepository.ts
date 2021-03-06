import { InjectEntityManager } from '@nestjs/typeorm';
import { City } from 'src/core/domain/city/City';
import { EntityManager } from 'typeorm';
import { CityRepository } from 'src/core/domain/city/CityRepository';

export class SQLCityRepository implements CityRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async getByDepartment(departmentId: number): Promise<City[]> {
    const rows = await this.manager.query(
      `SELECT id,departmentId, code, name FROM city WHERE departmentId=$1`,
      [departmentId],
    );

    const result = rows.map(
      (row) => new City(row.id, row.departmentId, row.code, row.name),
    );
    return Promise.resolve(result);
  }

  async save(city: City): Promise<City> {
    const result = await this.manager.query(
      `INSERT INTO city (departmentId,code,name) VALUES ($1,$2,$3)`,
      [city.departmentId, city.code, city.name],
    );
    const newCity = new City(
      result.insertId,
      city.departmentId,
      city.code,
      city.name,
    );
    return newCity;
  }

  async findById(cityId: number): Promise<City | undefined> {
    const rows = await this.manager.query(
      `SELECT id, departmentId, code, name FROM city WHERE id=$1`,
      [cityId],
    );

    if (rows == undefined || rows.length == 0) {
      return undefined;
    }

    const result = new City(
      rows[0].id,
      rows[0].departmentId,
      rows[0].code,
      rows[0].name,
    );

    return result;
  }
}
