import { Injectable, Inject } from '@nestjs/common';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { CityRepository } from 'src/core/domain/city/CityRepository';

@Injectable()
export class UpdateDataSchool {
  constructor(
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  async execute(id: number, cityId: number, name: string): Promise<void> {
    const school = await this.schoolRepository.findById(id);
    if (school === undefined) {
      throw new Error('School not found');
    }

    const city = await this.cityRepository.findById(school.cityId);

    if (city === undefined) {
      throw new Error('City not found');
    }
    school.updateData(cityId, name);
    this.schoolRepository.update(school);
  }
}
