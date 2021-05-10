import { Injectable, Inject } from '@nestjs/common';
import { School } from 'src/model/School';
import { SchoolRepository } from 'src/repository/SchoolRepository';

@Injectable()
export class SchoolService {
  constructor(
    @Inject('SchoolRepository') private schoolRepository: SchoolRepository,
  ) {}

  getByCity(cityId: number): Promise<School[]> {
    return this.schoolRepository.getByCity(cityId);
  }
}
