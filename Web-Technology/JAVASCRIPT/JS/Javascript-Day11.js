
let food = document.querySelectorAll(".food")
let button = document.querySelector("#btn")
let body = document.querySelector(".container")

// Button Click = Evenet Listener 
button.addEventListener("click", () => {

    button.innerHTML = `<i class="fa-solid fa-sun"></i>` // To change btn text after btn clicked

    body.style.backgroundColor = "rgb(73, 73, 73)"

    button.style.backgroundColor = "rgb(73, 73, 73)"
    button.style.color = "white"

    sm.style.color = "white"

    food.forEach((ele)=> {
        ele.style.color = "white"
    })

})


// Methods to change the html element

let sm = document.getElementById("sukhimanus")
console.log(sm);

// innerhtml
sm.innerHTML = "<h1> Anamika Great Women </h1>"

// textContent
sm.textContent = "Adheera"



//

let Numbers = [10, 20, 30, 40, 50, 60]

let first = Numbers.find((ele) => ele >30)
console.log(first);


// To fibe sum of all array elements use reduce
let total = Numbers.reduce((a, b) => a + b)
console.log(total);
