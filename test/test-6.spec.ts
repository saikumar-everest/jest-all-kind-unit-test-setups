import {getCallOnFutureMultibaggerStock, TradeCall} from '../src/test-6';

describe('Tests for mocking local util methods thats been used in another util method, which the code under test', () => {
  it('should return BUY call as valuation cheap for AL', () => {
    const originalModule = jest.requireActual('../src/test-6');
    (originalModule.findFutureMultibaggerStock as jest.Mock) = jest.fn(() => 'AL');

    const actual = getCallOnFutureMultibaggerStock();

    expect(actual).toEqual({
      call: TradeCall.BUY,
    });
  });
});
