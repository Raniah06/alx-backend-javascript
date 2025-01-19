const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('API Integration Tests', () => {
  describe('GET /', () => {
    it('should return status 200 and correct message', (done) => {
      request(`${baseUrl}/`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return status 200 and correct message for valid :id', (done) => {
      request(`${baseUrl}/cart/12`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return status 404 for invalid :id (non-numeric)', (done) => {
      request(`${baseUrl}/cart/hello`, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
