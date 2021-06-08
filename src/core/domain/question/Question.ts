export class Question {
  private _id: number;
  private _categoryId: number;
  private _vocationId: number;
  private _name: string;

  constructor(
    id: number,
    categoryId: number,
    vocationId: number,
    name: string,
  ) {
    this._id = id;
    this._categoryId = categoryId;
    this._vocationId = vocationId;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }
  get categoryId(): number {
    return this._categoryId;
  }

  get vocationId(): number {
    return this._vocationId;
  }

  get name(): string {
    return this._name;
  }
}
