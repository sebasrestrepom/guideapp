import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { InMemoryResultDetailRepository } from 'src/resultDetail/repository/InMemoryResultDetailRepository';
import { ResultDetailRepository } from 'src/resultDetail/repository/ResultDetailRepository';
import { ResultDetailController } from 'src/resultDetail/controller/ResultDetailController';
import { ResultDetailService } from 'src/resultDetail/service/ResultDetailService';
import { Result } from 'src/result/model/Result';
import { Question } from 'src/question/model/Question';
import { ResultRepository } from 'src/result/repository/ResultRepository';
import { InMemoryResultRepository } from 'src/result/repository/InMemoryResultRepository';
import { QuestionRepository } from 'src/question/repository/QuestionRepository';
import { InMemoryQuestionRepository } from 'src/question/repository/InMemoryQuestionRepository';

describe('ResultDetailController (e2e)', () => {
  let app: INestApplication;
  let resultDetailRepository: ResultDetailRepository;
  let resultRepository: ResultRepository;
  let questionRepository: QuestionRepository;

  beforeEach(async () => {
    resultDetailRepository = new InMemoryResultDetailRepository();
    resultRepository = new InMemoryResultRepository();
    questionRepository = new InMemoryQuestionRepository();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ResultDetailController],
      providers: [
        {
          provide: 'ResultDetailRepository',
          useValue: resultDetailRepository,
        },
        {
          provide: 'ResultRepository',
          useValue: resultRepository,
        },
        {
          provide: 'QuestionRepository',
          useValue: questionRepository,
        },
        ResultDetailService,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('/resultDetail/save-result (POST)', async () => {
    const result = new Result(1, 3);
    const question = new Question(1, 1127, 1128, 'Te gustan los deportes ?');
    await resultRepository.save(result);
    await questionRepository.save(question);
    await request(app.getHttpServer())
      .post('/resultDetail/save-result/')
      .send({
        id: 1,
        resultId: 1,
        questionId: 1,
        value: 'el resultado es:___',
      })
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
