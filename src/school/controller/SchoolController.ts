import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
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
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  cityId: number;
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

class UpdateSchoolRequest {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  cityId: number;
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

@ApiTags('School')
@Controller()
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  @Post('school/save-school')
  @ApiOperation({ summary: 'Creation of a new school' })
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
  @ApiOperation({ summary: 'Delete a school by its id' })
  async deleteSchool(@Param('id') id: number): Promise<void> {
    await this.schoolService.deleteSchool(id);
  }

  @Get('school/get-by-city/:cityId')
  @ApiOperation({ summary: 'List of schools by city' })
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
  @ApiOperation({ summary: 'Update data of a school' })
  async updateSchool(
    @Param('id') id: number,
    @Body() request: UpdateSchoolRequest,
  ): Promise<void> {
    await this.schoolService.updateSchool(id, request.cityId, request.name);
  }
}
