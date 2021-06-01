import { Student } from 'src/student/model/Student';

export interface StudentRepository {
  save(student: Student): Promise<Student>;
  findByEmail(email: string): Promise<Student | undefined>;
}
