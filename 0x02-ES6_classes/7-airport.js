class Airport {
  constructor(name, code) {
    this._name = this._verifyString(name, 'name');
    this._code = this._verifyString(code, 'code');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._verifyString(newName, 'name');
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this._verifyString(newCode, 'code');
  }

  toString() {
    return `[${this._code}]`;
  }

  _verifyString(value, attributeName) { // Correct: Instance method
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }
}

Airport.prototype[Symbol.toStringTag] = 'Airport';

export default Airport;
