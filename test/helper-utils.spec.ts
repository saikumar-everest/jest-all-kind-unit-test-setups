import {addGivenNumbers} from '../src/helper-utils';

describe('Helper utils unit tests', () => {
  it('should find sum of given numbers', () => {
    expect(addGivenNumbers(2, 5, 7)).toEqual(14);
  });
});
