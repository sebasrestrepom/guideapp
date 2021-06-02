import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { InMemoryResultRepository } from 'src/result/repository/InMemoryResultRepository';
import { ResultRepository } from 'src/result/repository/ResultRepository';
import { ResultController } from 'src/result/controller/ResultController';
import { ResultService } from 'src/result/service/ResultService';
import { Student } from 'src/student/model/Student';
import { StudentRepository } from 'src/student/repository/StudentRepository';
import { InMemoryStudentRepository } from 'src/student/repository/InMemoryStudentRepository';

describe('ResultController (e2e)', () => {
  let app: INestApplication;
  let resultRepository: ResultRepository;
  let studentRepository: StudentRepository;

  beforeEach(async () => {
    resultRepository = new InMemoryResultRepository();
    studentRepository = new InMemoryStudentRepository();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ResultController],
      providers: [
        {
          provide: 'ResultRepository',
          useValue: resultRepository,
        },
        {
          provide: 'StudentRepository',
          useValue: studentRepository,
        },
        ResultService,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/result/save-result (POST)', async () => {
    const student = new Student(
      1,
      3,
      'sebastian',
      'restrepo',
      'sebasrestrepom@gmail.com',
      '12344',
    );
    await studentRepository.save(student);
    await request(app.getHttpServer())
      .post('/result/save-result/')
      .send({
        id: 1,
        studentId: 1,
      })
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
