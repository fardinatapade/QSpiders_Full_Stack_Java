// By Literal

let movies = ['KGF', 'KICK', 'WANTED', 1, 2, 3]
console.log(movies);

console.log(movies[2   ]);

movies[2] = 'UNWANTED'
console.log(movies);



// By New Constructor

const age = new Array(12, 23, 45, 56, 78)

const names = new Array('Fardin', 'Harsh', 'Siddarth', 'Abhishek');

console.log(age);
console.log(names);

names[0] = 'DBZ'
console.log(names);



// By Creating size


const Numbers = new Array(12)
console.log(Numbers);

Numbers[5] = 10
Numbers[20] = 5
console.log(Numbers);

let resto = new Array(2000)
console.log(resto);

resto[1234] = 'Durga Cafe'
