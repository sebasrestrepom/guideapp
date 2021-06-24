import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteSchool } from 'src/core/use_cases/school/DeleteSchool';

@ApiTags('School')
@Controller()
export class DeleteSchoolController {
  constructor(private deleteSchool: DeleteSchool) {}

  @Delete('api/school/delete-school/:id')
  @ApiOperation({ summary: 'Delete a school by its id' })
  async handle(@Param('id') id: number): Promise<void> {
    await this.deleteSchool.execute(id);
  }
}
