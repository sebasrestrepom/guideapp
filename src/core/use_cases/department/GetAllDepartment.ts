import { Injectable, Inject } from '@nestjs/common';
import { Department } from 'src/core/domain/department/Department';
import { DepartmentRepository } from 'src/core/domain/department/DepartmentRepository';

@Injectable()
export class GetAllDepartment {
  constructor(
    @Inject('DepartmentRepository')
    private departmentRepository: DepartmentRepository,
  ) {}

  execute(): Promise<Department[]> {
    return this.departmentRepository.getAll();
  }
}
