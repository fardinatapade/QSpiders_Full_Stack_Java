// Using Array and ForEach create order list 

const { createElement } = require("react")

let ol = document.createElement("ol")
document.body.appendChild(ol)
ol.type = "A"  // This is shortcut to create attribute
ol.reversed = "A" // To reverse the list

let Fruits = ["Mango", "Banana", "Apple", "Kiwi", "Avacado"]

Fruits.forEach((ele) => {
    let li = document.createElement("li")
    li.innerHTML = ele
    ol.appendChild(li)
})

// Traditional Event
function getContent() {
    let h1 = document.createElement("h1")
    document.body.appendChild(h1)
    h1.innerHTML = "Hi ! Button Is Clicked"
}