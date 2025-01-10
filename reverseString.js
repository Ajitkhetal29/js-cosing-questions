str1 = "ABA";
function reverseString(str) {

// using for loop
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   console.log(revStr);

// using reverse and 

    const revStr = str.split('').reverse().join('');

  if (str == revStr) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log("not a palindrome");
  }
}

reverseString(str1);

console.log(8 | 3);

