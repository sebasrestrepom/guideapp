import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GetCityByDepartmentController } from 'src/http/controller/city/get-city-by-department/GetCityByDepartmentController';
import { SaveANewCityController } from 'src/http/controller/city/save-a-new-city/SaveANewCityController';
import { InMemoryCityRepository } from 'src/core/infrastructure/city/InMemoryCityRepository';
import { SaveANewCity } from 'src/core/use_cases/city/SaveANewCity';
import { GetCityByDepartment } from 'src/core/use_cases/city/GetCityByDepartment';

describe('CityController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [GetCityByDepartmentController, SaveANewCityController],
      providers: [
        {
          provide: 'CityRepository',
          useClass: InMemoryCityRepository,
        },
        SaveANewCity,
        GetCityByDepartment,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/city/get-by-department/9 (GET)', () => {
    return request(app.getHttpServer())
      .get('/city/get-by-department/9')
      .expect(200)
      .expect([{ id: 5, departmentId: 9, code: 2, name: 'Medellín' }]);
  });

  afterAll(async () => {
    await app.close();
  });
});
