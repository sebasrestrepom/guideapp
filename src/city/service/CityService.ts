import { Injectable, Inject } from '@nestjs/common';
import { City } from 'src/city/model/City';
import { CityRepository } from 'src/city/repository/CityRepository';

@Injectable()
export class CityService {
  constructor(
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  getByDepartment(departmentId: number): Promise<City[]> {
    return this.cityRepository.getByDepartment(departmentId);
  }
  saveCity(departmentId: number, code: number, name: string): Promise<City> {
    const city = new City(undefined, departmentId, code, name);
    return this.cityRepository.save(city);
  }
}
