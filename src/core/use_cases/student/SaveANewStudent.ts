import { Injectable, Inject } from '@nestjs/common';
import { Student } from 'src/core/domain/student/Student';
import { StudentRepository } from 'src/core/domain/student/StudentRepository';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SaveANewStudent {
  constructor(
    @Inject('StudentRepository') private studentRepository: StudentRepository,
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
  ) {}

  async execute(
    schoolId: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<Student> {
    const emailValidate = await this.studentRepository.findByEmail(email);
    if (emailValidate != undefined) {
      throw new Error('Error, Email already exists');
    }
    const school = await this.schoolRepository.findById(schoolId);
    if (school === undefined) {
      throw new Error('School not found');
    }
    const salt = await bcrypt.genSalt();
    const passwordEncrypted = await bcrypt.hash(password.toString(), salt);
    const student = new Student(
      undefined,
      schoolId,
      name,
      lastName,
      email,
      passwordEncrypted,
    );
    return this.studentRepository.save(student);
  }
}
