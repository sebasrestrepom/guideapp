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
    //Validaciones, como caules

    //validar que el estudiante exsita

    //creamos el resultado
    const result = Result.createANewResult(studentId);

    details.forEach((detail) => {
      //validar que la question exista

      result.addNewDetail(detail.questionId, detail.value);
    });

    const newResult = await this.resultRepository.save(result);
    return newResult;
  }
}
