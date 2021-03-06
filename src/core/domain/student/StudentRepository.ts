import { Student } from 'src/core/domain/student/Student';

export interface StudentRepository {
  save(student: Student): Promise<Student>;
  findByEmail(email: string): Promise<Student | undefined>;
}
