import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SchoolController } from 'src/controller/SchoolController';
import { InMemorySchoolRepository } from 'src/repository/InMemorySchoolRepository';
import { SchoolService } from 'src/service/SchoolService';

describe('SchoolController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [SchoolController],
      providers: [
        {
          provide: 'SchoolRepository',
          useClass: InMemorySchoolRepository,
        },
        SchoolService,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/school/get-by-city/3 (GET)', () => {
    return request(app.getHttpServer())
      .get('/school/get-by-city/3')
      .expect(200)
      .expect([{ id: 1, cityId: 3, name: 'Colegio Teresiano' }]);
  });

  afterAll(async () => {
    await app.close();
  });
});
