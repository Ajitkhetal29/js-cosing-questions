const num = 123;

function isArmstrong(num) {
  var numString = num.toString();
  var armstrongNum = 0;
  for (const n of numString) {
    armstrongNum += Math.pow(Number(n), numString.length);
  }

  return armstrongNum === num ? "true" : "false";
}

console.log(isArmstrong(111));
