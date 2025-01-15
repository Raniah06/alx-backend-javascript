function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
    // If success is false, the promise does nothing (no resolve or reject)
  });
}

module.exports = getPaymentTokenFromAPI;
