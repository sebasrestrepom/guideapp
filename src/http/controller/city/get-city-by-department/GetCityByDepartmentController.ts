import { Controller, Get, Param } from '@nestjs/common';
import { GetCityByDepartment } from 'src/core/use_cases/city/GetCityByDepartment';
import { GetCityByDepartmentResponse } from './GetCityByDepartmentResponse';

@Controller()
export class GetCityByDepartmentController {
  constructor(private cityService: GetCityByDepartment) {}

  @Get('city/get-by-department/:departmentId')
  async handle(
    @Param('departmentId') departmentId: string,
  ): Promise<GetCityByDepartmentResponse[]> {
    const cities = await this.cityService.execute(parseInt(departmentId, 10));

    const response: GetCityByDepartmentResponse[] = cities.map((city) => {
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
