export const addGivenNumbers = (...values: number[]): number => {
  return values?.reduce((accumulator, currentValue) => accumulator + currentValue);
};
