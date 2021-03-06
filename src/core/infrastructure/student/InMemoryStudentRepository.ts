import { Student } from 'src/core/domain/student/Student';
import { StudentRepository } from 'src/core/domain/student/StudentRepository';

export class InMemoryStudentRepository implements StudentRepository {
  private _database = new Map<string, Student>();

  save(student: Student): Promise<Student> {
    const newIndex = this._database.size + 1;
    const newStudent = new Student(
      newIndex,
      student.schoolId,
      student.name,
      student.lastName,
      student.email,
      student.password,
    );

    this._database.set(`${newStudent.id}`, newStudent);

    return Promise.resolve(newStudent);
  }

  findByEmail(email: string): Promise<Student | undefined> {
    const myarray = [...this._database.values()];
    const students = myarray.filter((student) => student.email === email);
    if (students == undefined || students.length == 0) {
      return Promise.resolve(undefined);
    }
    return Promise.resolve(students[0]);
  }
}
