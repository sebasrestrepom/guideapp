export class BaseError extends Error {
    constructor(m?: string) {
        super(m);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, new.target.prototype);
    }
}