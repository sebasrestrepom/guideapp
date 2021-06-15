import { City } from 'src/core/domain/city/City';
import { CityRepository } from 'src/core/domain/city/CityRepository';

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

  save(city: City): Promise<City> {
    let newIndex;
    if (city.id === undefined) {
      newIndex = this._database.size + 1;
    } else {
      newIndex = city.id;
    }
  
    const newCity = new City(newIndex, city.departmentId, city.code, city.name);

    this._database.set(`${newCity.id}`, newCity);
    return Promise.resolve(newCity);
  }

  findById(cityId: number): Promise<City | undefined> {
    const city = this._database.get(`${cityId}`);

    return Promise.resolve(city);
  }
}
