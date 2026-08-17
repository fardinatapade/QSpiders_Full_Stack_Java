// Global scope - This Scope Variable

var palce = 'Pune'
{
    console.log(palce);
    var age = 21
    console.log(age);
}
console.log(age);


{
    var movie = 'Ramayana'
}

movie = 'Dabang'
{
    let movie = 'PK'
    console.log(movie);
}
console.log(movie);

// Block scope
let subject = 'Javascript'

if(true) {
    console.log(subject); // -> It gives Error like., Uncaught ReferenceError: Cannot access 'subject' before initialization


    //let subject = 'React' // -> Let cannot be accept redlaration, its accept re-initilization

    console.log(subject);
}

var song = 'Don'

const op = () => {
    console.log(song);
    var value = 'Anything'
    console.log(value);
    var movies = 'KGF'
}
op()

//console.log(movies); // We cannot access var variable that iside in the the function scope

console.log(song);


