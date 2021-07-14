import { City } from 'src/core/domain/city/City';
import { CityRepository } from 'src/core/domain/city/CityRepository';
import { InMemoryCityRepository } from 'src/core/infrastructure/city/InMemoryCityRepository';
import { GetCityByDepartment } from 'src/core/use_cases/city/GetCityByDepartment';
import { CityMother } from 'test/core/domain/city/CityMother';

/* 
1 Given -- tienes que poner el sistem en el estado
2 When -- ejecuta la accion
3 Then -- valida los side-effects, es decir los cambios


GetSchoolByCity --> lista de escuelas por ciudad.accion

GIVEN
    1) crear un escuela
    2) crear un city
when
    ejcutar accion para traer lista de escuelas por ciudad

then
    verificamos que hayan escuelas

*/

describe('GetCityByDepartment should', () => {
  let getCityByDepartment: GetCityByDepartment;
  let cityRepository: CityRepository;
  let city: City[];

  test('save a new city', async () => {
    const city = CityMother.createAnCity();

    given_a_save_a_new_city_use_case();
    await and_a_city_with_this_data(city);

    await when_get_the_city_with_this_data(city.departmentId);

    await then_list_the_cities_with_this_information(city.departmentId);
  });

  function given_a_save_a_new_city_use_case() {
    cityRepository = new InMemoryCityRepository();
    getCityByDepartment = new GetCityByDepartment(cityRepository);
  }

  async function and_a_city_with_this_data(city: City) {
    await cityRepository.save(city);
  }

  async function when_get_the_city_with_this_data(departmentId: number) {
    city = await getCityByDepartment.execute(departmentId);
  }

  async function then_list_the_cities_with_this_information(
    departmentId: number,
  ) {
    await getCityByDepartment.execute(departmentId);
    expect(city).not.toBeUndefined();
  }
});
