import { City } from "src/core/domain/city/City";
import { CityNotFound } from "src/core/domain/city/CityNotFound";
import { CityRepository } from "src/core/domain/city/CityRepository";
import { School } from "src/core/domain/school/School";
import { SchoolRepository } from "src/core/domain/school/SchoolRepository";
import { InMemoryCityRepository } from "src/core/infrastructure/city/InMemoryCityRepository";
import { InMemorySchoolRepository } from "src/core/infrastructure/school/InMemorySchoolRepository";
import { SaveANewSchool } from "src/core/use_cases/school/SaveANewSchool";

describe('SaveANewSchool should', () => {

    let saveANewSchool: SaveANewSchool;
    let schoolRepository: SchoolRepository;
    let cityRepository: CityRepository;
    let school: School;
    let executor: () => void;

    test('save a new school', async () => {
        const cityId = 1;
        const name = 'Gabo';

        given_a_save_a_new_school_use_case();
        await and_a_city_with_this_cityId(cityId);
      
        await when_ (cityId, name);
        
        then_the_school_has_this_information(cityId, name);
    });

    test('throw an error when city does not exists', async () => {
        const cityId = 13;
        const name = 'Gabo';

        given_a_save_a_new_school_use_case();

        await when_save_the_school_with_this_data_and_throw_error(cityId, name);

        await then_the_action_throw_this_error(CityNotFound);
    });

    function given_a_save_a_new_school_use_case() {
        schoolRepository = new InMemorySchoolRepository();
        cityRepository = new InMemoryCityRepository();
        saveANewSchool = new SaveANewSchool(schoolRepository, cityRepository)
    }

    async function and_a_city_with_this_cityId(cityId: number) {
        await cityRepository.save(new City(cityId, 1, 1, "Cartago"))
    }

    async function when_save_the_school_with_this_data(cityId: number, name: string) {
        school = await saveANewSchool.execute(cityId, name);
    }

    async function when_save_the_school_with_this_data_and_throw_error(cityId: number, name: string) {
        executor = async () => {
            await saveANewSchool.execute(cityId, name);
        }
    }

    function then_the_school_has_this_information(cityId: number, name: string) {
        expect(school).not.toBeNull();
        expect(school).not.toBeUndefined();
        expect(school.cityId).toBe(cityId);
        expect(school.name).toBe(name);
    }

    async function then_the_action_throw_this_error(error: any) {
        await expect(executor()).rejects.toThrow(error);
    }
});