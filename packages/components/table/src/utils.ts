export const calculateProportionalValues = (values: number[], max: number): number[] => {
  const sum = values.reduce((a, b) => a + b, 0);
  const ratio = max / sum;
  const result = values.map((value: number) => Math.floor(value * ratio));

  let resultSum = result.reduce((a, b) => a + b, 0);
  let i = 0;
  while (resultSum < max) {
    result[i] += 1;
    resultSum += 1;
    i = (i + 1) % result.length;
  }

  return result;
};
