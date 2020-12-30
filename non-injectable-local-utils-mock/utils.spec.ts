import {getCallOnFutureMultibaggerStock, TradeCall} from './utils';

describe('Tests for mocking local util methods thats been used in another util method, which the code under test', () => {
  it('should return BUY call as valuation cheap for AL', () => {
    const originalModule = jest.requireActual('./utils');
    (originalModule.findFutureMultibaggerStock as jest.Mock) = jest.fn(() => 'AL');

    const actual = getCallOnFutureMultibaggerStock();

    expect(originalModule.findFutureMultibaggerStock).toBeCalled();
    expect(actual).toEqual({
      call: TradeCall.BUY,
    });
  });
});
