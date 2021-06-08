import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { InMemorySchoolRepository } from 'src/core/infrastructure/school/InMemorySchoolRepository';
import { SchoolRepository } from 'src/core/domain/school/SchoolRepository';
import { School } from 'src/core/domain/school/School';
import { StudentRepository } from 'src/core/domain/student/StudentRepository';
import { InMemoryStudentRepository } from 'src/core/infrastructure/student/InMemoryStudentRepository';
import { SaveANewStudentController } from 'src/http/controller/student/save-a-new-student/SaveANewStudentController';
import { SaveANewStudent } from 'src/core/use_cases/student/SaveANewStudent';
import { Student } from 'src/core/domain/student/Student';

describe('StudentController (e2e)', () => {
  let app: INestApplication;
  let studentRepository: StudentRepository;
  let schoolRepository: SchoolRepository;

  beforeEach(async () => {
    studentRepository = new InMemoryStudentRepository();
    schoolRepository = new InMemorySchoolRepository();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [SaveANewStudentController],
      providers: [
        {
          provide: 'StudentRepository',
          useValue: studentRepository,
        },
        {
          provide: 'SchoolRepository',
          useValue: schoolRepository,
        },
        SaveANewStudent,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/student/new-student (POST)', async () => {
    const school = new School(1, 9, 'colegio gabo');
    const student = new Student(
      1,
      2,
      'sebastian',
      'restrepo',
      'sebastia@gmail.com',
      '12345',
    );
    await schoolRepository.save(school);
    await studentRepository.save(student);
    await request(app.getHttpServer())
      .post('/student/new-student/')
      .send({
        schoolId: 1,
        name: 'sebastian',
        lastName: 'restrepo',
        email: 'sebastian@gmail.com',
        password: '12345',
      })
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
