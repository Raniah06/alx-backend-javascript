const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have.property('data', 'Successful response from the API');
        done(); // Indicate that the test has finished
      })
      .catch(done); // Ensure any errors are handled and propagate to the test framework
  });

  it('should do nothing when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined; // Since the promise does nothing, we expect undefined
        done();
      })
      .catch(done);
  });
});
