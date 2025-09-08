// Hello World
console.log("hello world");

// Number
let age = 36;
console.log("My age is:", age)

// String
let userName = "vsilapac"
console.log("Welcome, " + userName) 

// Boolean + Ternary
let isStudent = false
console.log(`I am ${isStudent ? "a student" : "not a student"}`)

// Undefined + Best practices for printing
let nothing;
console.log("The following item: (" + nothing + ") is undefined."); 
console.log(`The following item: (${nothing}) is undefined.`); // Preferred

console.log("-------------------------------")

// Arithmetic
let num1 = 5;
let num2 = 3;

console.log(`Add: ${num1 + num2}`);
console.log(`Subtract: ${num1 - num2}`);
console.log(`Multiply: ${num1 * num2}`);
console.log(`Divide: ${num1 / num2}`);
console.log(`Modulus: ${num1 % num2}`);

num1 *= 3

console.log(num1)

// Comparision
console.log("2" == 2) 
console.log("2" === 2) 
console.log(`num1 is ${num1 % 2 === 0 ? "even" : "odd"}`) 

console.log("-------------------------------")

// Functions and objects
function createUser(name, age) {
    return {
        userName: name,
        userAge: age,
        isAdult: age > 18
    }
}

let user1 = createUser("Randy", 28)
let user2 = createUser("Sam", 14)

console.log(user1)
console.log(user2)

user2.userName = "Samuel"

console.log(user2)

// Functions as parameters
function compute(x, y, operation) {
    return operation(x,y)
}

function average(x,y) {
    return (x + y) / 2
}

function sumIsEven(x,y) {
    return (x + y) % 2 === 0
}

console.log(compute(4, 6, average))
console.log(compute(4, 7, sumIsEven))

// Bad example: Don't use const on things that will be reassigned!
function test() {
	const count = 0
	for (let i = 0; i < 10; i++) {
		count++;
    }
    console.log(count)
}

test()
