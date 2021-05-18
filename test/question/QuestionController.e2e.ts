import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { QuestionController } from 'src/question/controller/QuestionController';
import { InMemoryQuestionRepository } from 'src/question/repository/InMemoryQuestionRepository';
import { QuestionService } from 'src/question/service/QuestionService';

describe('QuestionController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [QuestionController],
      providers: [
        {
          provide: 'QuestionRepository',
          useClass: InMemoryQuestionRepository,
        },
        QuestionService,
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
        { id: 1, categoryId: 3, vocationId: 20, name: 'Te gustan los deportes ?' },
      ]);
  });

  afterAll(async () => {
    await app.close();
  });
});
