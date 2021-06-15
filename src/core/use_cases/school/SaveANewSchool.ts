import { Injectable, Inject } from '@nestjs/common';
import { School } from 'src/core/domain/school/School';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { CityRepository } from 'src/core/domain/city/CityRepository';
import { CityNotFound } from 'src/core/domain/city/CityNotFound';

@Injectable()
export class SaveANewSchool {
  constructor(
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  async execute(cityId: number, name: string): Promise<School> {
    this.ensureCityExists(cityId);

    const school = new School(undefined, cityId, name);

    return this.schoolRepository.save(school);
  }

  private async ensureCityExists(cityId: number) {
    const city = await this.cityRepository.findById(cityId);
    console.log('city', city);
    if (city === undefined) {
      console.log('megaerror');
      throw new CityNotFound();
    }
  }
}
