import { Injectable, Inject } from '@nestjs/common';
import { Department } from 'src/model/Department';
import { DepartmentRepository } from 'src/repository/DepartmentRepository';

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
