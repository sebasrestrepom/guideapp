export class School {
  private _id: number;
  private _cityId: number;
  private _name: string;

  constructor(id: number, cityId: number, name: string) {
    this._id = id;
    this._cityId = cityId;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  get cityId(): number {
    return this._cityId;
  }

  get name(): string {
    return this._name;
  }
}
