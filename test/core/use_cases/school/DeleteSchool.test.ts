import { City } from 'src/core/domain/city/City';
import { CityNotFound } from 'src/core/domain/city/CityNotFound';
import { CityRepository } from 'src/core/domain/city/CityRepository';
import { School } from 'src/core/domain/school/School';
import { SchoolNotFound } from 'src/core/domain/school/SchoolNotFound';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { InMemoryCityRepository } from 'src/core/infrastructure/city/InMemoryCityRepository';
import { InMemorySchoolRepository } from 'src/core/infrastructure/school/InMemorySchoolRepository';
import { DeleteSchool } from 'src/core/use_cases/school/DeleteSchool';
import { SchoolMother } from 'test/core/domain/SchoolMother';

/* 
1 Given -- tienes que poner el sistem en el estado
2 When -- ejecuta la accion
3 Then -- valida los side-effects, es decir los cambios


DeleteSchool --> elimina una escuela.accion

GIVEN
    1) crear un escuela
    2) crear un city
when
    ejcutar accion para eliminar esa escual

then
    verificamos que se haya elimindao

*/

describe('DeleteSchool should', () => {
  let deleteSchool: DeleteSchool;
  let schoolRepository: SchoolRepository;
  let cityRepository: CityRepository;
  let school: School;

  test('save a new school', async () => {
    const school = SchoolMother.createAnSchool();

    given_a_save_a_new_school_use_case();
    await and_a_city_with_this_id(school.cityId);
    await and_a_school_with_this_data(school);

    await when_delete_the_school_with_this_data(school.id);

    then_the_school_will_have_been_delete();
  });

  test('throw an error when school does not exists', async () => {
    given_a_save_a_new_school_use_case();

    expect(async () => {
        await when_delete_the_school_with_this_data(school.id);
    }).rejects.toThrow(SchoolNotFound)
});

  function given_a_save_a_new_school_use_case() {
    schoolRepository = new InMemorySchoolRepository();
    cityRepository = new InMemoryCityRepository();
  }

  async function and_a_city_with_this_id(cityId: number) {
    await cityRepository.save(new City(cityId, 1, 1, 'Cartago'));
  }

  async function and_a_school_with_this_data(school: School) {
    await schoolRepository.save(school);
  }

  /*when*/

  async function when_delete_the_school_with_this_data(id: number) {
    school = await deleteSchool.execute(id);
  }

  /*then*/

  function then_the_school_will_have_been_delete() {
    expect(school).not.toBeNull();
    expect(school).not.toBeUndefined();
  }
});
