import { InjectEntityManager } from '@nestjs/typeorm';
import { School } from 'src/school/model/School';
import { EntityManager } from 'typeorm';
import { SchoolRepository } from './SchoolRepository';

export class SQLSchoolRepository implements SchoolRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async findById(schoolId: number): Promise<School> {
    const rows = await this.manager.query(
      `SELECT id,cityId, name FROM school WHERE id=?`,
      [schoolId],
    );

    if (rows == undefined || rows.length == 0) {
      return undefined;
    }

    const result = new School(rows[0].id, rows[0].cityId, rows[0].name);
    return result;
  }

  async save(school: School): Promise<School> {
    const result = await this.manager.query(
      `INSERT INTO school (cityId,name) VALUES (?,?)`,
      [school.cityId, school.name],
    );
    const newSchool = new School(result.insertId, school.cityId, school.name);
    return newSchool;
  }

  async delete(schoolId: number): Promise<void> {
    await this.manager.query(`DELETE FROM school WHERE id = ?`, [schoolId]);
  }

  async update(school: School): Promise<void> {
    await this.manager.query(
      `UPDATE school SET cityId = ?,name = ? WHERE id = ?`,
      [school.cityId, school.name, school.id],
    );
  }

  async getByCity(cityId: number): Promise<School[]> {
    const rows = await this.manager.query(
      `SELECT id,cityId, name FROM school WHERE cityId=?`,
      [cityId],
    );

    const result = rows.map((row) => new School(row.id, row.cityId, row.name));
    return result;
  }
}
