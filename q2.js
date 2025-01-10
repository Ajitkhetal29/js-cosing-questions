// Find the issue in the below code snippet.

 let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter+= i;
}
console.log(counter);
console.log(i);




// ANS ->    
//  The issue in the code snippet is that the var keyword in the declaration of i allows the variable to have a function scope instead of block scope. As a result, the variable i remains accessible outside the for loop, which is generally unintended.