import { Student } from 'src/core/domain/student/Student';

export class StudentMother {
  static async createAnStudent(): Promise<Student> {
    return new Student(
      20,
      50,
      'sebastian',
      'restre',
      'sebas@gmail.com',
      '1234',
    );
  }
}
