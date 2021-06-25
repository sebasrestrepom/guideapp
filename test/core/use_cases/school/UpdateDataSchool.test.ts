import { City } from 'src/core/domain/city/City';
import { CityNotFound } from 'src/core/domain/city/CityNotFound';
import { CityRepository } from 'src/core/domain/city/CityRepository';
import { School } from 'src/core/domain/school/School';
import { SchoolNotFound } from 'src/core/domain/school/SchoolNotFound';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { InMemoryCityRepository } from 'src/core/infrastructure/city/InMemoryCityRepository';
import { InMemorySchoolRepository } from 'src/core/infrastructure/school/InMemorySchoolRepository';
import { UpdateDataSchool } from 'src/core/use_cases/school/UpdateDataSchool';
import { SchoolMother } from 'test/core/domain/school/SchoolMother';

/* 
1 Given -- tienes que poner el sistem en el estado
2 When -- ejecuta la accion
3 Then -- valida los side-effects, es decir los cambios


UpdateDataSchool --> actualiza una escual que ya exsite.accion

GIVEN
    1) crear un escuela
    2) crear un city
when
    ejcutar accion para actualiza esa escual

then
    verificamos que los datos cambien

*/

describe('UpdateDataSchool should', () => {
  let updateDataSchool: UpdateDataSchool;
  let schoolRepository: SchoolRepository;
  let cityRepository: CityRepository;
  let school: School;

  test('update data school', async () => {
    const school = SchoolMother.createAnSchool();

    given_a_update_data_of_school_use_case();
    await and_a_city_with_this_id(school.cityId);
    await and_a_school_with_this_data(school);

    await when_update_the_school_with_this_data(
      school.id,
      school.cityId,
      'Gabo',
    );

    then_the_school_has_this_information(school.cityId, 'Gabo');
  });

  test('throw an error when school does not exists', async () => {
    given_a_update_data_of_school_use_case();

    expect(async () => {
      await when_update_the_school_with_this_data(56, 1, 'Gabo');
    }).rejects.toThrow(SchoolNotFound);
  });

  test('throw an error when city does not exists', async () => {
    const school = SchoolMother.createAnSchool();

    given_a_update_data_of_school_use_case();
    await and_a_school_with_this_data(school);

    expect(async () => {
      await when_update_the_school_with_this_data(
        school.id,
        school.cityId,
        'Gabo',
      );
    }).rejects.toThrow(CityNotFound);
  });

  function given_a_update_data_of_school_use_case() {
    schoolRepository = new InMemorySchoolRepository();
    cityRepository = new InMemoryCityRepository();
    updateDataSchool = new UpdateDataSchool(schoolRepository, cityRepository);
  }

  async function and_a_city_with_this_id(cityId: number) {
    await cityRepository.save(new City(cityId, 1, 1, 'Cartago'));
  }

  async function and_a_school_with_this_data(school: School) {
    await schoolRepository.save(school);
  }

  async function when_update_the_school_with_this_data(
    id: number,
    cityId: number,
    name: string,
  ) {
    school = await updateDataSchool.execute(id, cityId, name);
  }

  function then_the_school_has_this_information(cityId: number, name: string) {
    expect(school).not.toBeNull();
    expect(school).not.toBeUndefined();
    expect(school.cityId).toBe(cityId);
    expect(school.name).toBe(name);
  }
});
