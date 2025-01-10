function checkForAnagrams(word1 , word2) {

    var arra1 = word1.split('').sort().join("");
    var array2 = word2.split('').sort().join("");
    var flag = false;

    if(arra1 === array2){
        flag = true
    }

    // for(let element of array1){
    //     if(!array2.includes(element)){
    //         flag = false ;
    //     }
    // }

    // for(let element of array2){
    //     if(!array1.includes(element)){
    //         flag = false ;
    //     }
    // }

    return flag;
    

}

console.log(checkForAnagrams("abc","acb"));
