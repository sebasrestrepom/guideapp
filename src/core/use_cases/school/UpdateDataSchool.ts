import { Injectable, Inject } from '@nestjs/common';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { CityRepository } from 'src/core/domain/city/CityRepository';
import { School } from 'src/core/domain/school/School';
import { SchoolNotFound } from 'src/core/domain/school/SchoolNotFound';
import { CityNotFound } from 'src/core/domain/city/CityNotFound';

@Injectable()
export class UpdateDataSchool {
  constructor(
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  async execute(id: number, cityId: number, name: string): Promise<School> {
    const school = await this.schoolRepository.findById(id);
    if (school === undefined) {
      throw new SchoolNotFound();
    }

    const city = await this.cityRepository.findById(school.cityId);

    if (city === undefined) {
      throw new CityNotFound();
    }

    school.updateData(cityId, name);
    const updateSchool = this.schoolRepository.update(school);
    return Promise.resolve(updateSchool);
  }
}
