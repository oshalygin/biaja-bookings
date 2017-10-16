/* eslint-disable max-len */
/* eslint-disable no-useless-escape */

export const validateEmail = email => {
  const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regularExpression.test(email);
};

export const validatePhoneNumber = phoneNumber => {
  const regularExpression = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return regularExpression.test(phoneNumber);
};

const validation = {
  validateEmail,
  validatePhoneNumber,
};

export default validation;
