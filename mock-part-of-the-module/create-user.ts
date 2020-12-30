import fetch from 'node-fetch';

// Copied code from https://jestjs.io/docs/en/bypassing-module-mocks
export const createUser = async () => {
  const response = await fetch('http://website.com/users', {method: 'POST'});
  const userId = await response.text();
  return userId;
};
