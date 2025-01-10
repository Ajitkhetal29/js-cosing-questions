function multiply(a, b) {
  return a * b;
}

function curriedDun(n) {
  return function (m) {
    return n * m;
  };
}

const fun1 = curriedDun(5);
console.log(fun1(6));
