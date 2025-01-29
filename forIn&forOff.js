const arr = [1,2,3]

// use to iterate over a arrays values directly

for (let val of arr){
    console.log(val);
    
}

const person = {

    name:"ajit",
    surname : "khetal"
}

// use to iterate over a object keys directly


for (let key in person){
    console.log(person[key]);
    
}

Object.values(person).forEach(val => {
    console.log(val);
    
})

