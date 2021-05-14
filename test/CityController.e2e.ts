import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CityController } from 'src/controller/CityController';
import { InMemoryCityRepository } from 'src/repository/InMemoryCityRepository';
import { CityService } from 'src/service/CityService';

describe('CityController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [CityController],
      providers: [
        {
          provide: 'CityRepository',
          useClass: InMemoryCityRepository,
        },
        CityService,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/city/get-by-department/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/city/get-by-department/1')
      .expect(200)
      .expect([
        { id: 1, departmentId: 1, code: 1, name: 'Medellín' },
      ]);
  });

  afterAll(async () => {
    await app.close();
  });
});
