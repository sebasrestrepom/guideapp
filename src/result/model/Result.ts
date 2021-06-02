export class Result {
  private _id: number;
  private _studentId: number;

  constructor(id: number, studentId: number) {
    this._id = id;
    this._studentId = studentId;
  }

  get id(): number {
    return this._id;
  }

  get studentId(): number {
    return this._studentId;
  }
}
