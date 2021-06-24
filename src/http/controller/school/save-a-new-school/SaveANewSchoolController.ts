import { Body, Controller, Post } from '@nestjs/common';
import { SaveANewSchool } from 'src/core/use_cases/school/SaveANewSchool';
import { SaveANewSchoolResponse } from './SaveANewSchoolResponse';
import { SaveANewSchoolRequest } from './SaveANewSchoolRequest';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('School')
@Controller()
export class SaveANewSchoolController {
  constructor(private saveANewSchool: SaveANewSchool) {}

  @Post('api/school/save-school')
  @ApiOperation({ summary: 'Creation of a new school' })
  async handle(
    @Body() request: SaveANewSchoolRequest,
  ): Promise<SaveANewSchoolResponse> {
    const school = await this.saveANewSchool.execute(
      request.cityId,
      request.name,
    );

    return {
      id: school.id,
      cityId: school.cityId,
      name: school.name,
    };
  }
}
