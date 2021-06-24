import { City } from "src/core/domain/city/City";
import { CityRepository } from "src/core/domain/city/CityRepository";
import { InMemoryCityRepository } from "src/core/infrastructure/city/InMemoryCityRepository";
import { SaveANewCity } from "src/core/use_cases/city/SaveANewCity";
import { CityMother } from "test/core/domain/city/CityMother";

describe('SaveANewCity should', () => {

    let saveANewCity: SaveANewCity;
    let cityRepository: CityRepository;
    let city: City;
    let executor: () => void;

    test('save a new city', async () => {
        const city = CityMother.createAnCity();

        given_a_save_a_new_city_use_case();
      
        await when_save_the_city_with_this_data(city.departmentId, city.code, city.name);
        
        then_the_city_has_this_information(city.departmentId, city.code, city.name);
    });

    function given_a_save_a_new_city_use_case() {
        cityRepository = new InMemoryCityRepository();
        saveANewCity = new SaveANewCity(cityRepository)
    }

    async function when_save_the_city_with_this_data(departmentId: number, code: number, name: string) {
        city = await saveANewCity.execute(departmentId, code, name);
    }

    function then_the_city_has_this_information(departmentId: number, code: number, name: string) {
        expect(city).not.toBeNull();
        expect(city).not.toBeUndefined();
        expect(city.departmentId).toBe(departmentId);
        expect(city.name).toBe(name);
    }

});