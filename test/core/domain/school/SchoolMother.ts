import { School } from 'src/core/domain/school/School';

export class SchoolMother {
  static createAnSchool(): School {
    return new School(50, 2, 'any name');
  }
}
