/* 

WebTech task 


Create minimum 10 array of Object data

Each object should consist Name, email, id, gender, hobbies in array, salary, dept, address in object, isMarried or not

Extract and store in new array

1. Only married employees
2. same dept employees
3. same native employees
4. the employees with highest salary
5. the employees who's gender is same

Add

1. Add Company name to each object
2. increase the salary by 20% if salary is more that 50000
3. Sort all employees based on experience

Delete

1. employees with minimum experience
2. Delete all Female employees who are married

*/


let Employee = [
    {
        ename: 'Siddarth',
        email: 'siddarthyadav@gmail.com',
        id: 1,
        gender: 'Male',
        hobbies: ["Riding", "Playing Cricket", "Book Reading"],
        salary: 40000,
        dept: 'SQL',
        address: {
            city: "Chapra",
            state: "Bihar"
        },
        isMarried: false
    },

    {
        ename: 'Harsh',
        email: 'harshgupta@gmail.com',
        id: 2,
        gender: 'Male',
        hobbies: ["Riding", "Playing Cricket", "Book Reading"],
        salary: 69000,
        dept: 'JAVA',
        address: {
            city: "Ranchi",
            state: "Jharkhand"
        },
        isMarried: false
    },

    {
        ename: 'Fardin',
        email: 'fardinatapade@gmail.com',
        id: 3,
        gender: 'Male',
        hobbies: ["Riding", "Playing Football", "Gym"],
        salary: 40000,
        dept: 'WEB-TECH',
        address: {
            city: "Kolhapur",
            state: "Maharashtra"
        },
        isMarried: false
    },

    {
        ename: 'Abhishek',
        email: 'abhishekdhere@gmail.com',
        id: 4,
        gender: 'Male',
        hobbies: ["Riding", "Playing Cricket", "Gym"],
        salary: 40000,
        dept: 'SQL',
        address: {
            city: "Kolhapur",
            state: "Maharashtra"
        },
        isMarried: false
    },

    {
        ename: 'Rahul',
        email: 'rahulpatil@gmail.com',
        id: 5,
        gender: 'Male',
        hobbies: ["Reading", "Football", "Gaming"],
        salary: 45000,
        dept: 'Java',
        address: {
            city: "Pune",
            state: "Maharashtra"
        },
        isMarried: true
    },

    {
        ename: 'Sneha',
        email: 'snehajadhav@gmail.com',
        id: 6,
        gender: 'Female',
        hobbies: ["Dancing", "Painting", "Traveling"],
        salary: 38000,
        dept: 'React',
        address: {
            city: "Mumbai",
            state: "Maharashtra"
        },
        isMarried: true
    },

    {
        ename: 'Aman',
        email: 'amanverma@gmail.com',
        id: 7,
        gender: 'Male',
        hobbies: ["Cricket", "Music", "Gym"],
        salary: 52000,
        dept: 'SQL',
        address: {
            city: "Bangalore",
            state: "Karnataka"
        },
        isMarried: true
    },

    {
        ename: 'Priya',
        email: 'priyasharma@gmail.com',
        id: 8,
        gender: 'Female',
        hobbies: ["Cooking", "Reading", "Yoga"],
        salary: 42000,
        dept: 'HTML',
        address: {
            city: "Nashik",
            state: "Maharashtra"
        },
        isMarried: false
    },

    {
        ename: 'Vishal',
        email: 'vishalkadam@gmail.com',
        id: 9,
        gender: 'Male',
        hobbies: ["Riding", "Photography", "Gaming"],
        salary: 48000,
        dept: 'JavaScript',
        address: {
            city: "Kolhapur",
            state: "Maharashtra"
        },
        isMarried: true
    },

    {
        ename: 'Neha',
        email: 'nehadeshmukh@gmail.com',
        id: 10,
        gender: 'Female',
        hobbies: ["Singing", "Dancing", "Traveling"],
        salary: 55000,
        dept: 'React',
        address: {
            city: "Hyderabad",
            state: "Telangana"
        },
        isMarried: false
    }
]

// 1. Only married employees

let getMarriedEmployees = Employee.filter((ele) => {
    return ele.isMarried === true;
})
console.log("--- Married Employees ---");
console.log(getMarriedEmployees)


// 2. same dept employees

let sameDeptEmp = Employee.filter((ele) => {
    return ele.dept === 'SQL';
})
console.log("---Employees Are Working in SQL DEPT ---")
console.log(sameDeptEmp)

// 3. same native employees

let sameNativeEmp = Employee.filter((ele) => {
    return ele.address.city === "Kolhapur"
})
console.log("---Employees Are From Same City ---")
console.log(sameNativeEmp)


// 4. the employees with highest salary
let Empsal = Employee.sort((a,b) => {
    return b.salary - a.salary
})
console.log("--- Employee That Have Highest Salary ---")
console.log(Empsal[0])


// 5. the employees who's gender is same

let maleGengerEmp = Employee.filter((ele) =>  {
    return ele.gender === "Male"
})
console.log("--- Male Gender Employees ---")
console.log(maleGengerEmp)

let femaleGengerEmp = Employee.filter((ele) =>  {
    return ele.gender === "Female"
})
console.log("--- Female Gender Employees ---")
console.log(femaleGengerEmp)


// 6. Add Company name to each object

Employee.forEach((ele) => {
    return ele.company = "TCS"
})
console.log("--- Added Company Name to every Employee ---")
console.log(Employee)


// 7. increase the salary by 20% if salary is more than 50000

Employee.forEach((ele) => {
    if(ele.salary > 50000) {
        ele.salary = ele.salary + ele.salary * 20 / 100;
    }
})
console.log("-- Hike In Salary if Salary Is more than 50000 ---")
console.log(Employee)


// 8. Delete all Female employees who are married

Employee = Employee.filter((ele) => {
    return !(ele.gender === "Female" && ele.isMarried === true);
});
console.log("-- After Deleting Female Married Employees --");
console.log(Employee);