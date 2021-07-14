import { Department } from 'src/core/domain/department/Department';

export class DepartmentMother {
  static createAnDepartment(): Department {
    return new Department(20, 2, 'Valle');
  }
}
