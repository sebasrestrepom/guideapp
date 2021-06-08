import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GetAllDepartmentController } from 'src/http/controller/department/get-all-department/GetAllDepartmentController';
import { InMemoryDepartmentRepository } from 'src/core/infrastructure/department/InMemoryDepartmentRepository';
import { GetAllDepartment } from 'src/core/use_cases/department/GetAllDepartment';

describe('DepartmentController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [GetAllDepartmentController],
      providers: [
        {
          provide: 'DepartmentRepository',
          useClass: InMemoryDepartmentRepository,
        },
        GetAllDepartment,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/department/get-all (GET)', () => {
    return request(app.getHttpServer())
      .get('/department/get-all')
      .expect(200)
      .expect([
        { departmentId: 1, code: 3, name: 'Antioquia' },
        { departmentId: 2, code: 4, name: 'Valle' },
      ]);
  });

  afterAll(async () => {
    await app.close();
  });
});
