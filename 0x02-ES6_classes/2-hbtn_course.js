class ALXCourse {
  constructor(name, length, students) {
    this._name = this._verifyString(name, 'name');
    this._length = this._verifyNumber(length, 'length');
    this._students = this._verifyArray(students, 'students');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._verifyString(newName, 'name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._verifyNumber(newLength, 'length');
  }

  get students() {
    return [...this._students];
  }

  set students(newStudents) {
    this._students = this._verifyArray(newStudents, 'students');
  }

  _verifyString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  _verifyNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  _verifyArray(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attributeName} must be an array`);
    }
    return value;
  }
}

export default ALXCourse;
