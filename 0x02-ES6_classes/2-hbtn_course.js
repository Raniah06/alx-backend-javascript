export default class ALXCourse {
  constructor(name, length, students) {
    ALXCourse._verifyString(name);
    ALXCourse._verifyNumber(length);
    ALXCourse._verifyArray(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  static _verifyString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  static _verifyNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  static _verifyArray(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    ALXCourse._verifyString(newName);
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    ALXCourse._verifyNumber(newLength);
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    ALXCourse._verifyArray(newStudents);
    this._students = newStudents;
  }
}
