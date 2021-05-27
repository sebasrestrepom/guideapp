export class Student {
  private _id: number;
  private _schoolId: number;
  private _name: string;
  private _lastName: string;
  private _email: string;
  private _password: string;

  constructor(
    id: number,
    schoolId: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    this._id = id;
    this._schoolId = schoolId;
    this._name = name;
    this._lastName = lastName;
    this._email = email;
    this._password = password;
  }

  get id(): number {
    return this._id;
  }

  get schoolId(): number {
    return this._schoolId;
  }

  get name(): string {
    return this._name;
  }

  get lastName(): string {
    return this._lastName;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }
}
