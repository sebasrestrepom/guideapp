import { Injectable, Inject } from '@nestjs/common';
import { School } from 'src/core/domain/school/School';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { CityRepository } from 'src/core/domain/city/CityRepository';

@Injectable()
export class GetSchoolByCity {
  constructor(
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  execute(cityId: number): Promise<School[]> {
    return this.schoolRepository.getByCity(cityId);
  }
}
