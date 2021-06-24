import { City } from "src/core/domain/city/City";

export class CityMother {
    static createAnCity(): City {
        return new City(20, 2, 3, "Cartago");
    }
}