import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateDataSchool } from 'src/core/use_cases/school/UpdateDataSchool';
import { UpdateDataSchoolRequest } from './UpdateDataSchoolRequest';

@ApiTags('School')
@Controller()
export class UpdateDataSchoolController {
  constructor(private updateDataSchool: UpdateDataSchool) {}

  @Put('school/update-school/:id')
  @ApiOperation({ summary: 'Update data of a school' })
  async handle(
    @Param('id') id: number,
    @Body() request: UpdateDataSchoolRequest,
  ): Promise<void> {
    await this.updateDataSchool.execute(id, request.cityId, request.name);
  }
}
