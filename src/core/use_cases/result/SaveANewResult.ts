import { Injectable, Inject } from '@nestjs/common';
import { QuestionRepository } from 'src/core/domain/question/QuestionRepository';
import { Result, ResultDetail } from 'src/core/domain/result/Result';
import { ResultDetailRepository, ResultRepository } from 'src/core/domain/result/ResultRepository';
import { StudentRepository } from 'src/core/domain/student/StudentRepository';

@Injectable()
export class SaveANewResult {
  constructor(
    @Inject('ResultDetailRepository')
    private resultDetailRepository: ResultDetailRepository,
    @Inject('ResultRepository') private resultRepository: ResultRepository,
    @Inject('QuestionRepository')
    private questionRepository: QuestionRepository,
    @Inject('StudentRepository') private studentRepository: StudentRepository,
  ) {}

  async execute(
    resultId: number,
    questionId: number,
    value: string,
  ): Promise<ResultDetail> {
    const result = new ResultDetail(undefined, resultId, questionId, value);
    const resultValidate = await this.resultRepository.findById(resultId);
    if (resultValidate === undefined) {
      throw new Error('Error, Result not found');
    }
    const questionValidate = await this.questionRepository.findById(questionId);
    if (questionValidate === undefined) {
      throw new Error('Error, Question not found');
    }
    return this.resultDetailRepository.save(result);
  }
 
    const result = new Result(undefined, studentId);
    const studentValidate = await this.studentRepository.findById(studentId);
    if (studentValidate === undefined) {
      throw new Error('Error, student not found');
    }
    return this.resultRepository.save(result);
}
