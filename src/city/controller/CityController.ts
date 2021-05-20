import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CityService } from 'src/city/service/CityService';

class GetByDepartmentResponse {
  id: number;
  departmentId: number;
  code: number;
  name: string;
}

class SaveCityResponse {
  id: number;
  departmentId: number;
  code: number;
  name: string;
}

class SaveCityRequest {
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

  @Post('city/save-city')
  async saveCity(@Body() request: SaveCityRequest): Promise<SaveCityResponse> {
    const city = await this.cityService.saveCity(
      request.departmentId,
      request.code,
      request.name,
    );

    return {
      id: city.id,
      departmentId: city.departmentId,
      code: city.code,
      name: city.name,
    };
  }
}
