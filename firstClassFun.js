// FIRST CLASS FUN
// funs threated as orher variables are calles as first class fun,
// they can be stoted in a variable like other variable

const fun = function name() {
  pass;
};

//  can be passe to another fun as a parameter

function getSquare(num) {
  return num * num;
}

function getSqrOfNum(fun, num) {
  return fun(num);
}

console.log(getSqrOfNum(getSquare, 5));

//  they can return a function

function crateSimpleFun() {
  return function () {
    console.log("i am a returned fun");
  };
}
const func = crateSimpleFun()
func()
