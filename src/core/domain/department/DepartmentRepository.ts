import { Department } from 'src/core/domain/department/Department';

export interface DepartmentRepository {
  getAll(): Promise<Department[]>;
}
