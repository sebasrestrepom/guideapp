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

  }

  async deleteSchool(schoolId: number): Promise<void> {
    const school = await this.schoolRepository.findById(schoolId);
    if (school == undefined) {
      throw new Error('Not found Id');
    }
    this.schoolRepository.delete(schoolId);
  }
}
