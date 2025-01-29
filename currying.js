function multiply(a, b) {
  return a * b;
}

function curriedFun(n){
  return function (m){
    return n*m
  }
}

const fun1 = curriedFun(3);
const fun2 = fun1(3)

console.log(typeof(fun2));
