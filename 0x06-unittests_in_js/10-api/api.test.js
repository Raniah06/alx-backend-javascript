const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('API Integration Tests', () => {
  describe('GET /available_payments', () => {
    it('should return status 200 and correct payment methods object', (done) => {
      request(`${baseUrl}/available_payments`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        const paymentMethods = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(paymentMethods);
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return status 200 and welcome message when userName is provided', (done) => {
      const options = {
        url: `${baseUrl}/login`,
        method: 'POST',
        json: true,
        body: { userName: 'Betty' }
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('should return status 400 when userName is not provided', (done) => {
      const options = {
        url: `${baseUrl}/login`,
        method: 'POST',
        json: true,
        body: {}
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(400);
        expect(body).to.equal('Username is required');
        done();
      });
    });
  });
});
