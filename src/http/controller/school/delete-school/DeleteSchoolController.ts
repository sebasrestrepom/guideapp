import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteSchool } from 'src/core/use_cases/school/DeleteSchool';

@Controller()
export class DeleteSchoolController {
  constructor(private deleteSchool: DeleteSchool) {}

  @Delete('school/delete-school/:id')
  async handle(@Param('id') id: number): Promise<void> {
    await this.deleteSchool.execute(id);
  }
}
