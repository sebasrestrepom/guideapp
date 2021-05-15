import { InjectEntityManager } from '@nestjs/typeorm';
import { Department } from 'src/department/model/Department';
import { EntityManager } from 'typeorm';
import { DepartmentRepository } from './DepartmentRepository';

export class SQLDepartmentRepository implements DepartmentRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async getAll(): Promise<Department[]> {
    const rows = await this.manager.query(
      `SELECT id, name, code FROM department`,
    );
    const result = rows.map(
      (row) => new Department(row.id, row.code, row.name),
    );
    return Promise.resolve(result);
  }
}
