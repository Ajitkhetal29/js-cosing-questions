const array =[1,2,3,4,5,6,7,8];


// find
const firstEvenNum = array.find((e) => e % 2 === 0);
console.log(firstEvenNum);

// filter
const firstEvenNumArray = array.filter((e) => e % 2 === 0);
console.log(firstEvenNumArray);

// slice 
const subSetArray = array.slice(0,3)
console.log(subSetArray);
