class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = Building._verifyNumber(sqft, 'sqft'); // Use as static method
  }

  get sqft() {
    return this._sqft;
  }

  static _verifyNumber(value, attributeName) { // Make it a static method
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }
}

export default Building;
