import { City } from "src/model/City";
import { CityRepository } from "./CityRepository";

export class InMemoryCityRepository implements CityRepository {
    getByDepartment(departmentId: number): Promise<City[]> {
        const list: City[] = [];

        list.push(new City(1,1,1, 'Medellín'));
        list.push(new City(2,1,1, 'Rio Negro'));
        list.push(new City(3,1,1, 'Sta Rosa de Osos'));
        list.push(new City(4,2,1, 'Cartago'));
        list.push(new City(5,2,1, 'Tuluá'));
        list.push(new City(6,2,1, 'Buga'));
        console.log(departmentId);

        const response: City[]=list.filter((city)=>{
            console.log('departmentId',city.departmentId);
           return city.departmentId === departmentId; 
        });
        console.log(response);
        return Promise.resolve(response);
    }  
}     
