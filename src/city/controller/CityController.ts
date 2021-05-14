import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from 'src/city/service/CityService';

class GetByDepartmentResponse {
  id: number;
  departmentId: number;
  code: number;
  name: string;
}

@Controller()
export class CityController {
  constructor(private cityService: CityService) {}

  @Get('city/get-by-department/:departmentId')
  async getByDepartment(
    @Param('departmentId') departmentId: string,
  ): Promise<GetByDepartmentResponse[]> {
    const cities = await this.cityService.getByDepartment(
      parseInt(departmentId, 10),
    );

    const response: GetByDepartmentResponse[] = cities.map((city) => {
      return {
        id: city.id,
        departmentId: city.departmentId,
        code: city.code,
        name: city.name,
      };
    });

    return response;
  }
}
