export enum TradeCall {
  BUY,
  SELL,
  HOLD,
}
interface StockCall {
  call: TradeCall;
}

export const findFutureMultibaggerStock = (industry: string): string => {
  // Does complex analysis here and finally returns a stock name.
  return 'FMBS';
};

export const isValuationCheap = (stock: string): boolean => {
  // Does complex analysis here and finally returns true or false.
  return stock === 'AL';
};

export const getCallOnFutureMultibaggerStock = (): StockCall => {
  const multibagger = findFutureMultibaggerStock('IT');
  const isCheap = isValuationCheap(multibagger);

  return isCheap ? {call: TradeCall.BUY} : {call: TradeCall.SELL};
};
