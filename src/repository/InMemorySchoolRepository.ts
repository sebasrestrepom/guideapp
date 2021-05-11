import { School } from 'src/model/School';
import { SchoolRepository } from './SchoolRepository';

export class InMemorySchoolRepository implements SchoolRepository {
  getByCity(cityId: number): Promise<School[]> {
    const list: School[] = [];

    list.push(new School(1, 1, 'Colegio Teresiano'));
    list.push(new School(2, 1, 'Colegio Inem'));
    list.push(new School(3, 2, 'Colegio Coredi'));
    list.push(new School(4, 2, 'Colegio campestre Horizontes '));
    list.push(new School(5, 3, 'Colegio Marco Tobón'));
    list.push(new School(6, 3, 'Colegio superior Pedro Justo Berrio'));
    list.push(new School(5, 4, 'Colegio Gabo'));
    list.push(new School(6, 4, 'Colegio la Presentación'));
    list.push(new School(5, 5, 'Colegio Comfandi'));
    list.push(new School(6, 5, 'Colegio del niño Jesús'));
    list.push(new School(5, 6, 'Colegio Académico'));
    list.push(new School(6, 6, 'Colegio mayor ciudad de Buga'));

    const response: School[] = list.filter((school) => {
      return school.cityId === cityId;
    });
    return Promise.resolve(response);
  }
}
