import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { City } from 'src/model/City';
import { CityRepository } from 'src/repository/CityRepository';

@Injectable()
export class CityService {
  constructor(
    @Inject('CityRepository') private cityRepository: CityRepository,
  ) {}

  getByDepartment(departmentId: number): Promise<City[]> {
    return this.cityRepository.getByDepartment(departmentId);
  }
}
