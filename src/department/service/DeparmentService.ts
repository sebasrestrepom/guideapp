import { Injectable, Inject } from '@nestjs/common';
import { Department } from 'src/department/model/Department';
import { DepartmentRepository } from 'src/department/repository/DepartmentRepository';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DepartmentRepository')
    private departmentRepository: DepartmentRepository,
  ) {}

  getAll(): Promise<Department[]> {
    return this.departmentRepository.getAll();
  }
}
