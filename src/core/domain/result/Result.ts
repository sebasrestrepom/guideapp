export class ResultDetail {
    private _id: number;
    private _resultId: number;
    private _questionId: number;
    private _value: string;
  
    constructor(id: number, resultId: number, questionId: number, value: string) {
      this._id = id;
      this._resultId = resultId;
      this._questionId = questionId;
      this._value = value;
    }
  
    get id(): number {
      return this._id;
    }
  
    get resultId(): number {
      return this._resultId;
    }
  
    get questionId(): number {
      return this._questionId;
    }
  
    get value(): string {
      return this._value;
    }
  }

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