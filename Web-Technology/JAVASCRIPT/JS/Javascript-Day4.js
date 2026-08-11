// Function types :
// 1. Named Function
// 2. Annoynymous function
// 3. Function With Arguments
// 4. Arrow Function
// 5. Nested Function



// Arrow Funtion

const check = (gender, state) => {

    console.log('=== Traveling Program ===')

    if (gender === 'female' && state === 'karnataka') {
        alert('Congrats ! Enjoy your Ride');
    } else {
        console.log('You are not eligible for this prgram');
    }
}
check(prompt('Enter your Gender :'), prompt('Enter your State :'))


// Nested Function 
// A function is inside another function is calles as Nested Function

const parent = () => {

    console.log('=== This is Parent Function ===');
    let a = [10,20,30,40,50]
    let a = 10
    let b = 20
    let sum = a + b
    
    const child = () => {
        console.log('=== This is Child Function ===');
        console.log(a[2]);

        console.log(sum*30);
        
        // let value = 200
    }
    child()

    // It will give error because we cannot access varialbes of child class but we can access parent class variables in child class
    // console.log('Value Is : ' + value);
    
}
parent()



// SetTimeout Function

// setTimeout function accepts two arguments
// 1. function
// 2. time

// It used to display content after the given time
window.setTimeout(() => {
    console.log('Hello');
}, 5000)


// This Function Called itself continously after the given time
window.setInterval(() => {
    console.log('welcome');
}, 1000)
