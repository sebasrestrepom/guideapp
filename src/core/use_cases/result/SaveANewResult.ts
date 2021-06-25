import { Injectable, Inject } from '@nestjs/common';
import { QuestionRepository } from 'src/core/domain/question/QuestionRepository';
import { Result } from 'src/core/domain/result/Result';
import {
  ResultDetailRepository,
  ResultRepository,
} from 'src/core/domain/result/ResultRepository';
import { StudentRepository } from 'src/core/domain/student/StudentRepository';

export class DetailRequest {
  resultId: number;
  questionId: number;
  value: string;
}

@Injectable()
export class SaveANewResult {
  constructor(
    @Inject('ResultDetailRepository')
    private resultDetailRepository: ResultDetailRepository,
    @Inject('ResultRepository')
    private resultRepository: ResultRepository,
    @Inject('QuestionRepository')
    private questionRepository: QuestionRepository,
    @Inject('StudentRepository') private studentRepository: StudentRepository,
  ) {}

  async execute(studentId: number, details: DetailRequest[]): Promise<Result> {
    //validar que el estudiante exsita
    const student = await this.studentRepository.findById(studentId);
    if (student === undefined) {
      throw new Error('Student not found');
    }

    //creamos el resultado
    const result = Result.createANewResult(studentId);

    details.forEach(async (detail) => {
      //validar que la question exista
      const question = await this.questionRepository.findById(
        detail.questionId,
      );
      if (question === undefined) {
        throw new Error('Question not found');
      }

      result.addNewDetail(detail.resultId, detail.questionId, detail.value);
    });

    const newResult = await this.resultRepository.save(result);
    return newResult;
  }
}
