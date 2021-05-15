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

  updateSchool(id: number,cityId: number, name: string): Promise<School> {
    const school = new School(id, cityId, name);
    return this.schoolRepository.update(school);
  }
}
