import { Injectable, Inject } from '@nestjs/common';
import { City } from 'src/core/domain/city/City';
import { CityRepository } from 'src/core/domain/city/CityRepository';

@Injectable()
export class GetCityByDepartment {
  constructor(
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  execute(departmentId: number): Promise<City[]> {
    return this.cityRepository.getByDepartment(departmentId);
  }
}
