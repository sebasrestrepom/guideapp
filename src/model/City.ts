export class City {
       
    private _id: number;
    private _departmentId: number;
    private _code: number;
    private _name: string;

    constructor(id: number,departmentId: number, code: number, name: string) {
        this._id = id;
        this._departmentId= departmentId;
        this._code = code;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }
    get departmentId(): number {
        return this._departmentId;
    }

    get code(): number {
        return this._code;
    }

    get name(): string {
        return this._name;
    }
}