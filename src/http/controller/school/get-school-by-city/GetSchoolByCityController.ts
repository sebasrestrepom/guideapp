import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { GetSchoolByCity } from 'src/core/use_cases/school/GetSchoolByCity';
import { GetSchoolByCityResponse } from './GetSchoolByCityResponse';

@Controller()
export class GetSchoolByCityController {
  constructor(private getSchoolByCity: GetSchoolByCity) {}

  @Get('school/get-by-city/:cityId')
  @ApiOperation({ summary: 'List of schools by city' })
  async handle(
    @Param('cityId') cityId: string,
  ): Promise<GetSchoolByCityResponse[]> {
    const schools = await this.getSchoolByCity.execute(parseInt(cityId, 10));

    const response: GetSchoolByCityResponse[] = schools.map((school) => {
      return {
        id: school.id,
        cityId: school.cityId,
        name: school.name,
      };
    });

    return response;
  }
}
