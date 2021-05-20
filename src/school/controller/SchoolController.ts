import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SchoolService } from 'src/school/service/SchoolService';

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

  @Delete('school/delete-school/:id')
  async deleteSchool(@Param('id') id: number): Promise<void> {
    await this.schoolService.deleteSchool(id);
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

  @Put('school/update-school/:id')
  async updateSchool(
    @Param('id') id: number,
    @Body() request: UpdateSchoolRequest,
  ): Promise<void> {
    await this.schoolService.updateSchool(id, request.cityId, request.name);
  }
}
