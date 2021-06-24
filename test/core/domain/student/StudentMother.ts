import { Student } from "src/core/domain/student/Student";

export class StudentMother {
    static createAnStudent(): Student {
        return new Student(20, 50, 'sebastian', 'restrepo', 'sebas@gmail.com','12345');
    }
}