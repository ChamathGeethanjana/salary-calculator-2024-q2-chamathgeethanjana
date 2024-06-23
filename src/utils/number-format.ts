export const parseNumberFormat = (value: number) => {
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
};
