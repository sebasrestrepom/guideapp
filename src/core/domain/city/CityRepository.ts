import { City } from 'src/core/domain/city/City';

export interface CityRepository {
  getByDepartment(departmentId: number): Promise<City[]>;
  findById(cityId: number): Promise<City | undefined>;
  save(city: City): Promise<City>;
}
