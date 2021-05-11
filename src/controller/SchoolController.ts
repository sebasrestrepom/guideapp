import { Controller, Get, Param } from '@nestjs/common';
import { SchoolService } from 'src/service/SchoolService';

class GetByCityResponse {
  id: number;
  cityId: number;
  name: string;
}

@Controller()
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  @Get('school/get-by-city/:cityId')
  async getByCity(
    @Param('cityId') cityId: string,
  ): Promise<GetByCityResponse[]> {
    const schools = await this.schoolService.getByCity(parseInt(cityId, 10));

    const response: GetByCityResponse[] = schools.map((school) => {
      return {
        id: school.id,
        cityId: school.cityId,
        name: school.name,
      };
    });

    return response;
  }
}
