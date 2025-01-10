// remove duplicate element from array

const arr = ["a", "b", "b", "c", "d", "d"];

// var set1 =new Set(arr)
// var arr1 = new Array(...set1)

// console.log(arr1)

function duplicateElement(orignalArray) {
//   var uniqueArray = [];

//   for (const element of orignalArray) {
//     if(!uniqueArray.includes(element)){
//         uniqueArray.push(element)
//     }
//   }

//   return uniqueArray;
// }

return [...new Set(orignalArray)]

}

console.log(duplicateElement(arr));
