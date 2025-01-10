function findFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  var factorial = 1;

  // return num * findFactorial(num - 1);

  for (let i = 1 ;i <= num ; i++ ){
    factorial *= i;
  }
  return factorial
}

console.log(findFactorial(10));
