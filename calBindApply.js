function sayHello(msg) {
    console.log(`${msg} , ${this.name}`)
}

const person = {name : "happy"}


// call

// sayHello.call(person, "Hello")
// sayHello.apply(person, ["Hello", "Namaste"])

const greetings = sayHello.bind(person)
greetings("Hello");

