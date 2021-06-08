import { Department } from 'src/core/domain/department/Department';
import { DepartmentRepository } from 'src/core/domain/department/DepartmentRepository';

export class InMemoryDepartmentRepository implements DepartmentRepository {
  getAll(): Promise<Department[]> {
    const list: Department[] = [];

    list.push(new Department(1, 3, 'Antioquia'));
    list.push(new Department(2, 4, 'Valle'));

    return Promise.resolve(list);
  }
}
