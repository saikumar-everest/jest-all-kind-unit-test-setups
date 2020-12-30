import {addGivenNumbers} from './add-numbers';

describe('Test-1 unit tests', () => {
  it('should find sum of given numbers', () => {
    expect(addGivenNumbers(2, 5, 7)).toEqual(14);
  });
});
