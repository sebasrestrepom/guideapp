import { Department } from 'src/core/domain/department/Department';
import { DepartmentRepository } from 'src/core/domain/department/DepartmentRepository';
import { InMemoryDepartmentRepository } from 'src/core/infrastructure/department/InMemoryDepartmentRepository';
import { GetAllDepartment } from 'src/core/use_cases/department/GetAllDepartment';
import { DepartmentMother } from 'test/core/domain/department/DepartmentMother';

/* 
1 Given -- tienes que poner el sistem en el estado
2 When -- ejecuta la accion
3 Then -- valida los side-effects, es decir los cambios


GetAllDepartment --> lista de departamentos.accion

GIVEN
    1) crear un department
   
when
    ejcutar accion para traer lista de departamentos

then
    verificamos que hayan departamenos

*/

describe('GetAllDepartment should', () => {
  let getAllDepartment: GetAllDepartment;
  let departmentRepository: DepartmentRepository;
  let department: Department;

  test('save a new department', async () => {
    const department = DepartmentMother.createAnDepartment();

    given_a_save_a_new_department_use_case();

    await when_get_the_department_with_this_data();

    then_list_the_departments_with_this_information();
  });

  function given_a_save_a_new_department_use_case() {
    departmentRepository = new InMemoryDepartmentRepository();
    getAllDepartment = new GetAllDepartment(departmentRepository);
  }

  async function when_get_the_department_with_this_data() {
    department = await getAllDepartment.execute();
  }

  function then_list_the_departments_with_this_information() {
    expect(department).not.toBeNull();
    expect(department).not.toBeUndefined();
  }
});
