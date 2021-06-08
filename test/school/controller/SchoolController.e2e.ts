import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { DeleteSchoolController } from 'src/http/controller/school/delete-school/DeleteSchoolController';
import { GetSchoolByCityController } from 'src/http/controller/school/get-school-by-city/GetSchoolByCityController';
import { SaveANewSchoolController } from 'src/http/controller/school/save-a-new-school/SaveANewSchoolController';
import { UpdateDataSchoolController } from 'src/http/controller/school/update-data-school/UpdateDataSchoolController';
import { InMemorySchoolRepository } from 'src/core/infrastructure/school/InMemorySchoolRepository';
import { DeleteSchool } from 'src/core/use_cases/school/DeleteSchool';
import { GetSchoolByCity } from 'src/core/use_cases/school/GetSchoolByCity';
import { SaveANewSchool } from 'src/core/use_cases/school/SaveANewSchool';
import { UpdateDataSchool } from 'src/core/use_cases/school/UpdateDataSchool';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { School } from 'src/core/domain/school/School';
import { InMemoryCityRepository } from 'src/core/infrastructure/city/InMemoryCityRepository';
import { City } from 'src/core/domain/city/City';
import { CityRepository } from 'src/core/domain/city/CityRepository';

describe('SchoolController (e2e)', () => {
  let app: INestApplication;
  let schoolRepository: SchoolRepository;
  let cityRepository: CityRepository;

  beforeEach(async () => {
    schoolRepository = new InMemorySchoolRepository();
    cityRepository = new InMemoryCityRepository();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [
        DeleteSchoolController,
        GetSchoolByCityController,
        SaveANewSchoolController,
        UpdateDataSchoolController,
      ],
      providers: [
        {
          provide: 'SchoolRepository',
          useValue: schoolRepository,
        },
        {
          provide: 'CityRepository',
          useValue: cityRepository,
        },
        DeleteSchool,
        GetSchoolByCity,
        SaveANewSchool,
        UpdateDataSchool,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/school/get-by-city/3 (GET)', async () => {
    const school = new School(1, 3, 'Colegio Teresiano');
    await schoolRepository.save(school);

    return request(app.getHttpServer())
      .get('/school/get-by-city/3')
      .expect(200)
      .expect([{ id: 1, cityId: 3, name: 'Colegio Teresiano' }]);
  });

  test('/school/delete-school/1 (DELETE)', async () => {
    const school = new School(1, 3, 'Colegio Teresiano');
    await schoolRepository.save(school);

    return request(app.getHttpServer())
      .delete('/school/delete-school/1')
      .expect(200);
  });

  test('/school/update-school/1 (PUT)', async () => {
    const school = new School(1, 1, 'Colegio Teresiano');
    const city = new City(1, 9, 2, 'Medellín');
    const city2 = new City(2, 9, 3, 'Cartago');
    await schoolRepository.save(school);
    await cityRepository.save(city);
    await cityRepository.save(city2);

    await request(app.getHttpServer())
      .put('/school/update-school/1')
      .send({ cityId: 2, name: 'Colegio Mayor' })
      .expect(200);

    const schoolDb = await schoolRepository.findById(school.id);
    expect(schoolDb.id).toBe(1);
    expect(schoolDb.cityId).toBe(2);
    expect(schoolDb.name).toBe('Colegio Mayor');
  });

  afterAll(async () => {
    await app.close();
  });
});
