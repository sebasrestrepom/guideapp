import { Injectable, Inject } from '@nestjs/common';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { CityRepository } from 'src/core/domain/city/CityRepository';

@Injectable()
export class DeleteSchool {
  constructor(
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  async execute(schoolId: number): Promise<void> {
    const school = await this.schoolRepository.findById(schoolId);
    if (school == undefined) {
      throw new Error('Not found Id');
    }
    this.schoolRepository.delete(schoolId);
  }
}
