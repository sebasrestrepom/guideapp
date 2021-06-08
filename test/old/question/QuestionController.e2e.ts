import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GetAllQuestionController } from 'src/http/controller/question/get-all-question/GetAllQuestionController';
import { InMemoryQuestionRepository } from 'src/core/infrastructure/question/InMemoryQuestionRepository';
import { GetAllQuestion } from 'src/core/use_cases/question/GetAllQuestion';

describe('QuestionController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [GetAllQuestionController],
      providers: [
        {
          provide: 'QuestionRepository',
          useClass: InMemoryQuestionRepository,
        },
        GetAllQuestion,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/question/get-all (GET)', () => {
    return request(app.getHttpServer())
      .get('/question/get-all')
      .expect(200)
      .expect([
        {
          id: 1,
          categoryId: 3,
          vocationId: 20,
          name: 'Te gustan los deportes ?',
        },
      ]);
  });

  afterAll(async () => {
    await app.close();
  });
});
