// Array Methods

let stdHobbies = ["Reading", "Travelling", "Playing", "Sleeping", "Gaming"];
console.log(stdHobbies);

stdHobbies.push("Listening");  // --> Add Value in Array
console.log(stdHobbies);

stdHobbies.pop()
console.log(stdHobbies); // --> Remove Last value Form the Array

stdHobbies.unshift("Sketching", "Swiming"); // --> Add Value in the starting in the array
console.log(stdHobbies); 

stdHobbies.shift() // --> Remove Starting Value
console.log(stdHobbies);



let Trainers = ["Sachin", "Vijay", "Harsha", "Rohit", "Naveen", "Mohit", "Sourav"];
let JavaTrainers = Trainers.slice(2,5); // --> Create separate array for Mentioned Array index no. value
console.log(Trainers);
console.log(JavaTrainers);


let T = ["Sachin", "Vijay", "Rohit", "Harsha"];
console.log(T);

T.splice (2, 2, "Aliya", "Megha", "Gouri");


let flowers = ["Rose", "Sunflower", "Lily", "Aboli", "Mogra", "Tulips"];
console.log(flowers);

flowers.reverse(); // --> Revers the array
console.log(flowers);

flowers.sort(); // --> Order Values By Alphabetical
console.log(flowers);

let numbers = [17, 8, 9, "Sara", true, 1, 77, 34, 21]
console.log(numbers);
console.log(numbers.sort()); // --> This is Not possible, Sort only work in String Values


let actress = ["Kiara", "Sara", "Mrunal"];
let actors = ["Salman", "Vicky", "Dhanush", "Thalaviar"];
let villans = ["Amarish Puri", "Shakti Kapoor"];
let couple = actress.concat(villans,actors); // --> To add two or more Arrays Use CONCAT
console.log(couple);


// indexOf()
console.log(actors.indexOf("Vicky"));
console.log(actors.indexOf("Rocky"));


// lastindexOf()
console.log(actors.lastIndexOf("Vicky"));


// Includes()
console.log(actors.includes("Salman"));
console.log(actors.includes("Abhishek"));

