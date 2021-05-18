import { Controller, Get } from '@nestjs/common';
import { DepartmentService } from 'src/department/service/DeparmentService';

class GetAllResponse {
  departmentId: number;
  code: number;
  name: string;
}

@Controller()
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Get('department/get-all')
  async getAll(): Promise<GetAllResponse[]> {
    const departments = await this.departmentService.getAll();

    const response: GetAllResponse[] = departments.map((department) => {
      return {
        departmentId: department.id,
        code: department.code,
        name: department.name,
      };
    });
    return response;
  }
}