import { Injectable, Inject } from '@nestjs/common';
import { Result } from 'src/result/model/Result';
import { ResultRepository } from 'src/result/repository/ResultRepository';
import { StudentRepository } from 'src/student/repository/StudentRepository';

@Injectable()
export class ResultService {
  constructor(
    @Inject('ResultRepository') private resultRepository: ResultRepository,
    @Inject('StudentRepository') private studentRepository: StudentRepository,
  ) {}

  async saveResult(studentId: number): Promise<Result> {
    const result = new Result(undefined, studentId);
    const studentValidate = await this.studentRepository.findById(studentId);
    if (studentValidate === undefined) {
      throw new Error('Error, student not found');
    }
    return this.resultRepository.save(result);
  }
}
