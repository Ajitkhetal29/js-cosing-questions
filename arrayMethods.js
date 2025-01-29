const array = [1, 2, 3, 4, 5, 6, 7, 8];


// ----------------------------------------------------
// GET METHODS

// find --> return only one elemet that satisfies teh condition fiest
const firstEvenNum = array.find((e) => e % 2 === 0);
console.log(firstEvenNum);
// output -> 2

// filter --> return all the elements that satidies the condituon
const firstEvenNumArray = array.filter((e) => e % 2 === 0);
console.log(firstEvenNumArray);
// output -> [2,4,6,8]

// slice  --> gives subset of an array using first index and last inex (last index would not includede)
const subSetArray = array.slice(0, 3);
console.log(subSetArray);
// output -> [1,2,3]


// ----------------------------------------------------
// ADD METHODS

// push -- > use to add one or more elements at the end of the end of orignal array.
//       --> orignal array will be modified.

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1.push(10, 11, 12, 13);
console.log(arr1);
// output --> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13]

// concat --> use to get new array by adding the new values to orignal array
//          --> orignal array will not be modiified

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr3 = arr2.concat(arr1);
console.log(arr3);
// output --> [1, 2, 3, 4, 5, 6, 7, 8 ,1, 2, 3, 4, 5, 6, 7, 8,9]

// splice -- > use to add , remove or replace the orignal array
//         --> takes 3 arguments start index, delete count , and replace values

const arra4 = [1,2,3,4,5,6]
arra4.splice(5,1)
// output --> [1,2,3,4,5]

// MODIFICATION METHODS

// map method -> use to iterate over each element of array an dperform some opration and get a new array as a result.
const arr5 = [1,2,3,4,5,6]
const sqArray = arr5.map((e)=> e* 2)
// output -->[ 2, 4, 6, 8, 10, 12 ]

// foreach method -> use to ierate over each elemnt of array and dont want an array in return. also does not modify orignal array

const arr6 = [1,2,3,4,5,6]
const arr7 = arr6.forEach((e)=> e
)
// undefined

// reducer method -> iterate over an array and return only one single value as a result . do not modify or chnage orignal array.

const numbers = [1,2,3,4,5,6]

const getTotal = function (accumulator , currentvalue) {
    return accumulator + currentvalue
}
const total = numbers.reduce(getTotal , 0)
console.log(total);
// output -->  21

