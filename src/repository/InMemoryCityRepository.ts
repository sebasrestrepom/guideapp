import { City } from 'src/model/City';
import { CityRepository } from './CityRepository';

export class InMemoryCityRepository implements CityRepository {
  getByDepartment(departmentId: number): Promise<City[]> {
    const list: City[] = [];

    list.push(new City(5, 9, 2, 'Medellín'));

    const response: City[] = list.filter((city) => {
      return city.departmentId === departmentId;
    });

    return Promise.resolve(response);
  }
}
