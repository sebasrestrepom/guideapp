import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { DepartmentController } from 'src/controller/DepartmentController';
import { InMemoryDepartmentRepository } from 'src/repository/InMemoryDepartmentRepository';
import { DepartmentService } from 'src/service/DeparmentService';

describe('DepartmentController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentController],
      providers: [
        {
          provide: 'DepartmentRepository',
          useClass: InMemoryDepartmentRepository,
        },
        DepartmentService,
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
