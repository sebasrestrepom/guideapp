import { ResultDetail } from './ResultDetail';

export class Result {
  private _id: number;
  private _studentId: number;
  private _details: ResultDetail[];

  constructor(id: number, studentId: number, details: ResultDetail[]) {
    this._id = id;
    this._studentId = studentId;
    this._details = details;
  }

  static createANewResult(studentId: number): Result {
    return new Result(undefined, studentId, []);
  }

  addNewDetail(questionId: number, value: string) {
    this._details.push(
      new ResultDetails(undefined, undefined, questionId, value),
    );
  }

  get id(): number {
    return this._id;
  }

  get studentId(): number {
    return this._studentId;
  }

  get details(): ResultDetail[] {
    return this._details;
  }
}
