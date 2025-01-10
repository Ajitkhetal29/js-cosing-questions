const str = "Hello World";

function findCountOfWovels(sampleString) {

    const vowelArray = ['a','e','i','o','u']
    var vowelcount = 0;

    for (const element of sampleString.toLowerCase()) {
        if(vowelArray.includes(element)){
            vowelcount += 1 ;
        }
        
    }

    return `The vowel count in the ${sampleString} is ${vowelcount}`
}

console.log(findCountOfWovels(str));
