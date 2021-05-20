import { City } from 'src/city/model/City';

export interface CityRepository {
  getByDepartment(departmentId: number): Promise<City[]>;
  findById(cityId: number): Promise<City[]>;
}
