import { Department } from "src/model/Department";

export interface DepartmentRepository {
    getAll(): Promise<Department[]>;
}