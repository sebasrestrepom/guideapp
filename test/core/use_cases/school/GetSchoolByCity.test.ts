import { City } from "src/core/domain/city/City";
import { CityRepository } from "src/core/domain/city/CityRepository";
import { School } from "src/core/domain/school/School";
import { SchoolRepository } from "src/core/domain/school/SchoolRepository";
import { InMemoryCityRepository } from "src/core/infrastructure/city/InMemoryCityRepository";
import { InMemorySchoolRepository } from "src/core/infrastructure/school/InMemorySchoolRepository";
import { GetSchoolByCity } from "src/core/use_cases/school/GetSchoolByCity";
import { SchoolMother } from "test/core/domain/school/SchoolMother";

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

describe('GetSchoolByCity should', () => {

    let getSchoolByCity: GetSchoolByCity;
    let schoolRepository: SchoolRepository;
    let cityRepository: CityRepository;
    let school: School;

    test('save a new school', async () => {
        const school = SchoolMother.createAnSchool();

        given_a_save_a_new_school_use_case();
        await and_a_city_with_this_id(school.cityId);
        await and_a_school_with_this_data(school);
      
        await when_get_the_schools_with_this_data(school.cityId);
        
        then_list_the_schools_with_this_information(school.cityId, school.name);
    });

    function given_a_save_a_new_school_use_case() {
        schoolRepository = new InMemorySchoolRepository();
        cityRepository = new InMemoryCityRepository();
        getSchoolByCity = new GetSchoolByCity(schoolRepository, cityRepository)
    }

    async function and_a_city_with_this_id(cityId: number) {
        await cityRepository.save(new City(cityId, 1, 1, "Cartago"))
    }

    async function and_a_school_with_this_data(school: School) {
        await schoolRepository.save(school);
    }

    async function when_get_the_schools_with_this_data(cityId: number) {
        school = await getSchoolByCity.execute(cityId);
    }

    function then_list_the_schools_with_this_information(cityId: number, name: string) {
        expect(school).not.toBeNull();
        expect(school).not.toBeUndefined();
        expect(school.cityId).toBe(cityId);
        expect(school.name).toBe(name);
    }
});