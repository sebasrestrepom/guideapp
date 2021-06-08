import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
import { StudentService } from 'src/student/service/StudentService';

class SaveStudentResponse {
  id: number;
  schoolId: number;
  name: string;
  lastName: string;
  email: string;
}

class SaveStudentRequest {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  schoolId: number;
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

@ApiTags('Student')
@Controller()
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post('student/new-student')
  @ApiOperation({ summary: 'Creation of a new student' })
  async saveStudent(
    @Body() request: SaveStudentRequest,
  ): Promise<SaveStudentResponse> {
    const student = await this.studentService.saveStudent(
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
