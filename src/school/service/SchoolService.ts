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

  async deleteSchool(schoolId: number): Promise<void> {
    const school = await this.schoolRepository.findById(schoolId);
    if (school == undefined) {
      throw new Error('Not found Id');
    }
    this.schoolRepository.delete(schoolId);
  }

  async updateSchool(id: number, cityId: number, name: string): Promise<void> {
    const school = await this.schoolRepository.findById(id);
    if (school === undefined) {
      throw new Error('School not found');
    }
    const city = await this.schoolRepository.getByCity(cityId);
    if (city == undefined) {
      throw new Error('City not found');
    }
    school.update(cityId, name);
  }
}
