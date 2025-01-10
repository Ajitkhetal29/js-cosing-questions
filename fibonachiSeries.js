function fibonachi(num) {
  if (num <= 0) {
    return [];
  }

  if (num === 1) {
    return [0];
  }

  const fibonachiSeries = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibonachiSeries.push(fibonachiSeries[i - 1] + fibonachiSeries[i - 2]);
  }
  return fibonachiSeries;
}

console.log(fibonachi(10));
