import { Department } from 'src/department/model/Department';

export interface DepartmentRepository {
  getAll(): Promise<Department[]>;
}
