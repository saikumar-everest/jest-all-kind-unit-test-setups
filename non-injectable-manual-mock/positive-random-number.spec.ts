import {getPositiveRandomNumber} from './positive-random-number';

describe('Test setup that uses manual mocking', () => {
  it('should always return 4 as random number', () => {
    jest.genMockFromModule('lodash');

    const actual = getPositiveRandomNumber();

    expect(actual).toEqual(4);
  });
});
