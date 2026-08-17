let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num);

// Callback in the form arrow function 

let evenNum = num.filter((ele)=> {
    console.log(ele);
    return ele % 2 == 0;
})
console.log(evenNum);


// Lesser Syntax 

let greaterNum = num.filter((ele)=> ele > 5);
console.log("Greater than 5 Numbers = " +greaterNum);


let Place = ["Mumbai", "Kolhapur", "Pune", "Nashik", "Satara", "Sangli", "Sindhu-Durg", "Ratnagiri", "Thane"];

// Callback in the form of annonymous function

let sPlace = Place.filter((ele)=> {
    console.log(ele);
    return ele.startsWith('S');
})
console.log("Places, There name Start with S = " +sPlace);


// Increase age by 5 Years

let Ages = [21, 22, 18, 30, 29, 26]
console.log(Ages[0] + 5);


let increaseAges = Ages.map((ele)=> {
    return ele + 5;
})
console.log("New Ages = " + increaseAges);

