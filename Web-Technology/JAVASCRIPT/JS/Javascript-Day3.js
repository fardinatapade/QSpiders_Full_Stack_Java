// function With Parameters
function add (a,b) {
    console.log("--- In Function ---");
    console.log(typeof a + b);
    console.log(a+b);
    console.log("--------------------");
}
// Function Calling With Arguments Passing
add(10,"twenty")
add(20,10)
add("hello")
add()     

// Ternary Operator
function ternary (age) {
    console.log(age>=18 ? "Eligible For Voting" : "Not Eligible For Voting")
}
ternary(18)


// Popups of WebPages
alert("This is alert")
confirm("This is for Confirmation")
prompt("This is for user input (Prompt)")


// Age Calculator
function ageCalculator(birthYear, currYear = 2026) {
    let userage = currYear - birthYear ;
    console.log("Your age is = " + userage);
}
let age = parseInt(prompt("Enter your Birth year :"))
ageCalculator(age)