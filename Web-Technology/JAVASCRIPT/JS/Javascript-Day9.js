let Nums = [10, 20, 30, 40, 50];

console.log(Nums);

// Syntax :

let newNums = Nums.reduce((v1, v2) => {
    console.log(v1+"--->"+v2);
    return v1 + v2;
});
console.log(newNums);


Nums.forEach((ele) => {
    console.log(ele + 5);
    return ele + 10; 
})


let Emp1 = {
    // key : value,
    ename : "Fardin",
    salary : "30000",
    isMarried : false
}

let Emp2 = {
    // key : value,
    ename : "Harsh",
    salary : "50000",
    isMarried : true
}

console.log(Emp1);

// . Notations access object values

console.log(Emp1.ename);
console.log(Emp2.ename);

// Storing object into array

let Employees = [Emp1, Emp2];
console.log(Employees);


// Directly storing object into array


let Actors = [
    {
        name : "Salman khan",
        state : "MH",
        gender : "Male",
        isMarried : false
    },
    {
        name : "Shahrukh khan",
        state : "MH",
        gender : "Male",
        isMarried : true
    },
    {
        name : "Amir khan",
        state : "MH",
        gender : "Male",
        isMarried : true
    },
]

console.log(Actors[0])


let marriedActor = Actors.filter((ele)=> {
    return ele.isMarried == true
})

console.log(marriedActor)


let allActors = Actors.map((ele) => {
    return ele.category = "Bollywood"
})

console.log(allActors)
console.log(Actors)
