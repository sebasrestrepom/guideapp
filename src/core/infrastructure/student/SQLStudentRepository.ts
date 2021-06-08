import { InjectEntityManager } from '@nestjs/typeorm';
import { Student } from 'src/core/domain/student/Student';
import { EntityManager } from 'typeorm';
import { StudentRepository } from 'src/core/domain/student/StudentRepository';

export class SQLStudentRepository implements StudentRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async save(student: Student): Promise<Student> {
    const result = await this.manager.query(
      `INSERT INTO student (schoolId, name, lastName, email, password) VALUES ($1,$2,$3,$4,$5)`,
      [
        student.schoolId,
        student.name,
        student.lastName,
        student.email,
        student.password,
      ],
    );

    const newStudent = new Student(
      result.insertId,
      student.schoolId,
      student.name,
      student.lastName,
      student.email,
      student.password,
    );
    return newStudent;
  }

  async findByEmail(email: string): Promise<Student> {
    const rows = await this.manager.query(
      `SELECT id, schoolId, name, lastName, email, password FROM student WHERE email=$1`,
      [email],
    );

    if (rows == undefined || rows.length == 0) {
      return undefined;
    }

    const result = new Student(
      rows[0].id,
      rows[0].schoolId,
      rows[0].name,
      rows[0].lastName,
      rows[0].email,
      rows[0].password,
    );
    return result;
  }
}
