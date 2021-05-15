import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SchoolService } from 'src/school/service/SchoolService';
import { School } from '../model/School';

class GetByCityResponse {
  id: number;
  cityId: number;
  name: string;
}

class SaveSchoolResponse {
  id: number;
  cityId: number;
  name: string;
}

class SaveSchoolRequest {
  cityId: number;
  name: string;
}

class UpdateSchoolResponse {
  id: number;
  cityId: number;
  name: string;
}

class UpdateSchoolRequest {
  cityId: number;
  name: string;
}

@Controller()
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  @Post('school/save-school')
  async saveSchool(
    @Body() request: SaveSchoolRequest,
  ): Promise<SaveSchoolResponse> {
    const school = await this.schoolService.saveSchool(
      request.cityId,
      request.name,
    );

    return {
      id: school.id,
      cityId: school.cityId,
      name: school.name,
    };
  }

  @Put('school/update-school/:id')
  async updateSchool(
    @Param('id') id: number,
    @Body() request: UpdateSchoolRequest,
  ): Promise<UpdateSchoolResponse> {
    const school = await this.schoolService.updateSchool(
      id,
      request.cityId,
      request.name,
    );
    return {
      id: school.id,
      cityId: school.cityId,
      name: school.name,
    };
  }

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
