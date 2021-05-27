import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { InMemorySchoolRepository } from 'src/school/repository/InMemorySchoolRepository';
import { SchoolRepository } from 'src/school/repository/SchoolRepository';
import { School } from 'src/school/model/School';
import { StudentRepository } from 'src/student/repository/StudentRepository';
import { InMemoryStudentRepository } from 'src/student/repository/InMemoryStudentRepository';
import { StudentController } from 'src/student/controller/StudentController';
import { StudentService } from 'src/student/service/StudentService';
import { Student } from 'src/student/model/Student';

describe('StudentController (e2e)', () => {
  let app: INestApplication;
  let studentRepository: StudentRepository;
  let schoolRepository: SchoolRepository;

  beforeEach(async () => {
    studentRepository = new InMemoryStudentRepository();
    schoolRepository = new InMemorySchoolRepository();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        {
          provide: 'StudentRepository',
          useValue: studentRepository,
        },
        {
          provide: 'SchoolRepository',
          useValue: schoolRepository,
        },
        StudentService,
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
