import { City } from 'src/city/model/City';
import { CityRepository } from './CityRepository';

export class InMemoryCityRepository implements CityRepository {
  private _database = new Map<string, City>();

  getByDepartment(departmentId: number): Promise<City[]> {
    const list: City[] = [];

    list.push(new City(5, 9, 2, 'Medellín'));

    const response: City[] = list.filter((city) => {
      return city.departmentId === departmentId;
    });

    return Promise.resolve(response);
  }

  findById(cityId: number): Promise<City[]> {
    const list: City[] = [];

    list.push(new City(5, 9, 2, 'Medellín'));

    const response: City[] = list.filter((city) => {
      return city.id === cityId;
    });

    return Promise.resolve(response);
  }
}
