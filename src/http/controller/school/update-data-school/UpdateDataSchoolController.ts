import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateDataSchool } from 'src/core/use_cases/school/UpdateDataSchool';
import { UpdateDataSchoolRequest } from './UpdateDataSchoolRequest';

@Controller()
export class UpdateDataSchoolController {
  constructor(private updateDataSchool: UpdateDataSchool) {}

  @Put('school/update-school/:id')
  async handle(
    @Param('id') id: number,
    @Body() request: UpdateDataSchoolRequest,
  ): Promise<void> {
    await this.updateDataSchool.execute(id, request.cityId, request.name);
  }
}
