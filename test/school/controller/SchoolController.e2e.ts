import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SchoolController } from 'src/school/controller/SchoolController';
import { InMemorySchoolRepository } from 'src/school/repository/InMemorySchoolRepository';
import { SchoolService } from 'src/school/service/SchoolService';
import { SchoolRepository } from 'src/school/repository/SchoolRepository';
import { School } from 'src/school/model/School';

describe('SchoolController (e2e)', () => {
  let app: INestApplication;
  let schoolRepository: SchoolRepository;

  beforeEach(async () => {
    schoolRepository = new InMemorySchoolRepository();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [SchoolController],
      providers: [
        {
          provide: 'SchoolRepository',
          useValue: schoolRepository,
        },
        SchoolService,
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
    const school = new School(1, 3, 'Colegio Teresiano');
    await schoolRepository.save(school);

    return request(app.getHttpServer())
      .put('/school/update-school/1')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
