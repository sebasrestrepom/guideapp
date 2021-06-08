import { InjectEntityManager } from '@nestjs/typeorm';
import { School } from 'src/core/domain/school/School';
import { EntityManager } from 'typeorm';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';

export class SQLSchoolRepository implements SchoolRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async findById(schoolId: number): Promise<School> {
    const rows = await this.manager.query(
      `SELECT id,cityId, name FROM school WHERE id=$1`,
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
      `INSERT INTO school (cityId,name) VALUES ($1,$2)`,
      [school.cityId, school.name],
    );
    const newSchool = new School(result.insertId, school.cityId, school.name);
    return newSchool;
  }

  async delete(schoolId: number): Promise<void> {
    await this.manager.query(`DELETE FROM school WHERE id = $1`, [schoolId]);
  }

  async getByCity(cityId: number): Promise<School[]> {
    const rows = await this.manager.query(
      `SELECT id,cityId, name FROM school WHERE cityId=$1`,
      [cityId],
    );

    const result = rows.map((row) => new School(row.id, row.cityId, row.name));
    return result;
  }

  async update(school: School): Promise<void> {
    await this.manager.query(
      `UPDATE school SET cityId = $1,name = $2 WHERE id = $3`,
      [school.cityId, school.name, school.id],
    );
  }
}
