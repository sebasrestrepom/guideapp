import { Department } from "src/model/Department";
import { DepartmentRepository } from "./DepartmentRepository";

export class InMemoryDepartmentRepository implements DepartmentRepository {
    getAll(): Promise<Department[]> {
        const list: Department[] = [];

        list.push(new Department(1,1, 'Antioquia'));
        list.push(new Department(2,2, 'Valle'));
      
        return Promise.resolve(list);
    }
}