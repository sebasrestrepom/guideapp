import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SaveANewStudent } from 'src/core/use_cases/student/SaveANewStudent';
import { SaveANewStudentRequest } from './SaveANewStudentRequest';
import { SaveANewStudentResponse } from './SaveANewStudentResponse';

@ApiTags('Student')
@Controller()
export class SaveANewStudentController {
  constructor(private saveANewStudent: SaveANewStudent) {}

  @Post('student/new-student')
  @ApiOperation({ summary: 'Creation of a new student' })
  async handle(
    @Body() request: SaveANewStudentRequest,
  ): Promise<SaveANewStudentResponse> {
    const student = await this.saveANewStudent.execute(
      request.schoolId,
      request.name,
      request.lastName,
      request.email,
      request.password,
    );
    return {
      id: student.id,
      schoolId: student.schoolId,
      name: student.name,
      lastName: student.lastName,
      email: student.email,
    };
  }
}
