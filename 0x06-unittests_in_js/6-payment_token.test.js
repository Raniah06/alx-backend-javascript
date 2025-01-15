const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have.property('data', 'Successful response from the API');
        done(); // Indicate the test is complete
      })
      .catch(done); // Catch and propagate errors
  });

  it('should return an error message when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected promise to be rejected'));
      })
      .catch((error) => {
        expect(error).to.equal('API call failed');
        done(); // Indicate the test is complete
      });
  });
});
