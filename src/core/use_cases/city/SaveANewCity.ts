import { Injectable, Inject } from '@nestjs/common';
import { City } from 'src/core/domain/city/City';
import { CityRepository } from 'src/core/domain/city/CityRepository';

@Injectable()
export class SaveANewCity {
  constructor(
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  execute(departmentId: number, code: number, name: string): Promise<City> {
    const city = new City(undefined, departmentId, code, name);
    return this.cityRepository.save(city);
  }
}
