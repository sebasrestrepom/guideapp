import { Controller, Get } from '@nestjs/common';
import { GetAllDepartment } from 'src/core/use_cases/department/GetAllDepartment';
import { GetAllDepartmentResponse } from './GetAllDepartmentResponse';

@Controller()
export class GetAllDepartmentController {
  constructor(private getAllDepartment: GetAllDepartment) {}

  @Get('department/get-all')
  async handle(): Promise<GetAllDepartmentResponse[]> {
    const departments = await this.getAllDepartment.execute();

    const response: GetAllDepartmentResponse[] = departments.map(
      (department) => {
        return {
          departmentId: department.id,
          code: department.code,
          name: department.name,
        };
      },
    );
    return response;
  }
}
