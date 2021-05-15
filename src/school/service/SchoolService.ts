import { Injectable, Inject } from '@nestjs/common';
import { School } from 'src/school/model/School';
import { SchoolRepository } from 'src/school/repository/SchoolRepository';

@Injectable()
export class SchoolService {
  constructor(
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
  ) {}

  getByCity(cityId: number): Promise<School[]> {
    return this.schoolRepository.getByCity(cityId);
  }

  saveSchool(cityId: number, name: string): Promise<School> {
    const school = new School(undefined, cityId, name);
    return this.schoolRepository.save(school);
  }

  deleteSchool(id: number): Promise<School> {
    const school = new School(id, undefined, undefined);
    return this.schoolRepository.delete(school);
  }
}
