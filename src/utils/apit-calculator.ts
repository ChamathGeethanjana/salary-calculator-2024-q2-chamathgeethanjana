export const getApit = (grossEarnings: number) => {
  if (grossEarnings <= 100000) {
    return 0;
  } else if (grossEarnings <= 141667) {
    return 0.06 * grossEarnings - 6000;
  } else if (grossEarnings <= 183333) {
    return 0.12 * grossEarnings - 14500;
  } else if (grossEarnings <= 225000) {
    return 0.18 * grossEarnings - 25500;
  } else if (grossEarnings <= 266667) {
    return 0.24 * grossEarnings - 39000;
  } else if (grossEarnings <= 308333) {
    return 0.3 * grossEarnings - 55000;
  } else {
    return 0.36 * grossEarnings - 73500;
  }
};
