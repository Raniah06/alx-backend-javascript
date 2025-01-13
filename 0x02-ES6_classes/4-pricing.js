import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = this._verifyNumber(amount, 'amount');
    this._currency = this._verifyCurrency(currency, 'currency');
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this._verifyNumber(newAmount, 'amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this._verifyCurrency(newCurrency, 'currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }

  _verifyNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  _verifyCurrency(value, attributeName) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attributeName} must be a Currency`);
    }
    return value;
  }
}

export default Pricing;
