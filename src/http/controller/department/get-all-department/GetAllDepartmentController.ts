import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetAllDepartment } from 'src/core/use_cases/department/GetAllDepartment';
import { GetAllDepartmentResponse } from './GetAllDepartmentResponse';

@ApiTags('Department')
@Controller()
export class GetAllDepartmentController {
  constructor(private getAllDepartment: GetAllDepartment) {}

  @Get('api/department/get-all')
  @ApiOperation({ summary: 'List of all departments of Colombia' })
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
