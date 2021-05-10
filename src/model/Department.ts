export class Department {
  private _id: number;
  private _code: number;
  private _name: string;

  constructor(id: number, code: number, name: string) {
    this._id = id;
    this._code = code;
    this._name = name;
  }

  get id(): number {
    return this._code;
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }
}
