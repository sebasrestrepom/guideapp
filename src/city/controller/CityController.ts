import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CityService } from 'src/city/service/CityService';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

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
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  departmentId: number;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  code: number;
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

@ApiTags('City')
@Controller()
export class CityController {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
  constructor(private cityService: CityService) {}

  @Get('city/get-by-department/:departmentId')
  @ApiOperation({ summary: 'List of cities that are in a given department' })
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
  @ApiOperation({ summary: 'Creation of a new city' })
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
