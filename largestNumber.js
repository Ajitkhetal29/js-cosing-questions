const arr = [1,2,3,4,5,6];

var largNum= arr[0]
for (let i = 0 ; i < arr.length ; i++){

    if(arr[i] > largNum){
        largNum = arr[i]
    }
   
}

console.log(largNum)