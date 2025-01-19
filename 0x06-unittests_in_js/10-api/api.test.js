const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('API Integration Tests', () => {
  describe('GET /', () => {
    it('should return status 200 and message "Welcome to the payment system"', (done) => {
      request(`${baseUrl}/`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return status 200 and message for valid cart id', (done) => {
      request(`${baseUrl}/cart/123`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('should return status 404 for invalid cart id', (done) => {
      request(`${baseUrl}/cart/hello`, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        expect(body).to.equal('Not Found');
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should return status 200 and the correct object', (done) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };

      request(`${baseUrl}/available_payments`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal(expected);
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
