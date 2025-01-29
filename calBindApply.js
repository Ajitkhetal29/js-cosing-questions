function sayHello(msg) {
  console.log(`${msg}, ${this.name}`);
}

const person = {
    name : "sam"
}

sayHello.call(person,"Hello")


var student = {
    age : 23,
    getAge : function (){
        return this.age
    }
}

var student1 = {age : 25}

console.log(student.getAge.call(student1)
);


// apply
sayHello.call(person,["hii"])



//bind 

const greeting = sayHello.bind(person);

greeting("Namaste")