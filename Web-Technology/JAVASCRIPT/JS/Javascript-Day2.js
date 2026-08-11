var name = "Vaishali"
let hobby = "Listing Podcasts"

if(true) {
    console.log(name);
    console.log(hobby);
    let hobby2 = "sketching"
}


// It will give error like : Uncaught ReferenceError: hobby2 is not defined
// console.log(hobby2);


// hoisting : Accessing or utilizing the variable before its declaration and initilization
console.log(place);

var place = "Kolhapur"
console.log(place);

// It will give error like : Uncaught ReferenceError: Cannot access 'age' before initialization
// console.log(age);
// const age = 18


let age = 25.99
console.log(typeof age);

let food = "oats is the best food"
console.log(typeof food);

let isMarried
console.log(typeof isMarried);


let nothing = null
console.log(typeof nothing);

let emp1 = {
    Name : "Vijay Sir",
    age = 29,
    isMarried = true,
    salary : Symbol(1000)
}

let emp2 = {
    Name : "Harsha Sir",
    age = 27,
    isMarried = true,
    salary : Symbol(1000)
}

console.log(emp1.salary == emp2.salary);

let isbigNumber = BigInt("969696969696")
console.log(typeof isbigNumber);

