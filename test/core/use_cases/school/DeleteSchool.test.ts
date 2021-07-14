import { School } from 'src/core/domain/school/School';
import { SchoolNotFound } from 'src/core/domain/school/SchoolNotFound';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { InMemorySchoolRepository } from 'src/core/infrastructure/school/InMemorySchoolRepository';
import { DeleteSchool } from 'src/core/use_cases/school/DeleteSchool';
import { SchoolMother } from 'test/core/domain/school/SchoolMother';

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
  let school: School;

  test('Delete a school', async () => {
    /*1- Save a new School
      2- Delete school */
    const school = SchoolMother.createAnSchool();

    given_delete_school_use_case();
    await and_a_school_with_this_data(school);

    await when_delete_the_school_with_this_data(school.id);

    await then_the_school_will_have_been_delete(school.id);
  });

  test('throw an error when school does not exists', async () => {
    given_delete_school_use_case();

    expect(async () => {
      await when_delete_the_school_with_this_data(10);
    }).rejects.toThrow(SchoolNotFound);
  });

  function given_delete_school_use_case() {
    schoolRepository = new InMemorySchoolRepository();
    deleteSchool = new DeleteSchool(schoolRepository);
  }

  async function and_a_school_with_this_data(school: School) {
    await schoolRepository.save(school);
  }

  /*when*/

  async function when_delete_the_school_with_this_data(id: number) {
    await deleteSchool.execute(id);
  }

  /*then*/

  async function then_the_school_will_have_been_delete(schoolId: number) {
    school = await schoolRepository.findById(schoolId);
    expect(school).toBeUndefined();
  }
});
