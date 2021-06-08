import { Injectable, Inject } from '@nestjs/common';
import { School } from 'src/core/domain/school/School';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { CityRepository } from 'src/core/domain/city/CityRepository';

@Injectable()
export class SaveANewSchool {
  constructor(
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  execute(cityId: number, name: string): Promise<School> {
    const school = new School(undefined, cityId, name);
    return this.schoolRepository.save(school);
  }
}
