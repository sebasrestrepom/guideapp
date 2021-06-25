import { School } from 'src/core/domain/school/School';
import { SchoolNotFound } from 'src/core/domain/school/SchoolNotFound';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { BaseError } from 'src/core/domain/shared/BaseError';
import { Student } from 'src/core/domain/student/Student';
import { StudentRepository } from 'src/core/domain/student/StudentRepository';
import { InMemorySchoolRepository } from 'src/core/infrastructure/school/InMemorySchoolRepository';
import { InMemoryStudentRepository } from 'src/core/infrastructure/student/InMemoryStudentRepository';
import { SaveANewStudent } from 'src/core/use_cases/student/SaveANewStudent';
import { StudentMother } from 'test/core/domain/student/StudentMother';
import * as bcrypt from 'bcrypt';

describe('SaveANewStudent should', () => {
  let saveANewStudent: SaveANewStudent;
  let studentRepository: StudentRepository;
  let schoolRepository: SchoolRepository;
  let student: Student;

  test('save a new student', async () => {
    const student = await StudentMother.createAnStudent();

    given_a_save_a_new_student_use_case();
    await and_a_school_with_this_schoolId(student.schoolId);

    await when_save_the_student_with_this_data(
      student.schoolId,
      student.name,
      student.lastName,
      student.email,
      student.password,
    );

    then_the_student_has_this_information(
      student.schoolId,
      student.name,
      student.lastName,
      student.email,
      student.password,
    );
  });

  test('throw an error when school does not exists', async () => {
    given_a_save_a_new_student_use_case();

    expect(async () => {
      await when_save_the_student_with_this_data(
        50,
        'sebastian',
        'restre',
        'sebas@gmail.com',
        '1234',
      );
    }).rejects.toThrow(SchoolNotFound);
  });

  test('throw an error when email exists', async () => {
    given_a_save_a_new_student_use_case();

    expect(async () => {
      await when_save_the_student_with_this_data(
        50,
        'sebastian',
        'restre',
        'sebas@gmail.com',
        '1234',
      );
    }).rejects.toThrow(SchoolNotFound);
  });

  test('throw an error when email already exists', async () => {
    const student = await StudentMother.createAnStudent();

    given_a_save_a_new_student_use_case();
    await and_a_student_with_this_data(student);

    expect(async () => {
      await when_save_the_student_with_this_data(
        50,
        'sebastian',
        'restre',
        'sebas@gmail.com',
        '1234',
      );
    }).rejects.toThrow(EmailNotFound);
  });

  async function and_a_student_with_this_data(student: Student) {
    await studentRepository.save(student);
  }

  function given_a_save_a_new_student_use_case() {
    studentRepository = new InMemoryStudentRepository();
    schoolRepository = new InMemorySchoolRepository();
    saveANewStudent = new SaveANewStudent(studentRepository, schoolRepository);
  }

  async function and_a_school_with_this_schoolId(schoolId: number) {
    await schoolRepository.save(new School(schoolId, 2, 'Gabo'));
  }

  async function when_save_the_student_with_this_data(
    schoolId: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    student = await saveANewStudent.execute(
      schoolId,
      name,
      lastName,
      email,
      password,
    );
  }

  function then_the_student_has_this_information(
    schoolId: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    bcrypt.compareSync(password, student.password)
      ? (password = student.password)
      : 'password failed';

    expect(student).not.toBeNull();
    expect(student).not.toBeUndefined();
    expect(student.schoolId).toBe(schoolId);
    expect(student.name).toBe(name);
    expect(student.lastName).toBe(lastName);
    expect(student.email).toBe(email);
    expect(student.password).toBe(password);
  }
});

export class EmailNotFound extends BaseError {}
