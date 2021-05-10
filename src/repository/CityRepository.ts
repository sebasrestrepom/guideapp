import { City } from "src/model/City";


export interface CityRepository { 
    getByDepartment(departmentId:number): Promise <City[]>;
}