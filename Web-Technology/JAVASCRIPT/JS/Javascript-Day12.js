// To access or Target html tag with id we use "getElementById"
let text = document.getElementById("text")
console.log(text);

// To insert or ipdate html content we use "innerHTML"
text.innerHTML = "Salman khan"
text.style.color = "orange"


// To create an html element from javascript we use "createElement"
let h1 = document.createElement("h1")
console.log(h1);

h1.innerHTML = "Superman"
// After creating HTML element to add this in html body tag we use "body.appendChild(variableName)"
document.body.appendChild(h1)

let image = document.createElement("img")
document.body.appendChild(image)


// To add Attributes in tag we use "setAttribute"
image.setAttribute("src", "https://i.pinimg.com/474x/1f/b2/9f/1fb29f5b389e9a4f6252430d847ab7ec.jpg")
image.setAttribute("height", "400px")


// List Tag creation with using Javascript

let orderlist = document.createElement("ol")
document.body.appendChild(orderlist)

let li1 = document.createElement("li")
orderlist.appendChild(li1)
li1.innerHTML = "Mango"

let li2 = document.createElement("li")
orderlist.appendChild(li2)
li2.innerHTML = "Banana"

let li3 = document.createElement("li")
orderlist.appendChild(li3)
li3.innerHTML = "Apple"

let li4 = document.createElement("li")
orderlist.appendChild(li4)
li4.innerHTML = "Papaya"

let li5 = document.createElement("li")
orderlist.appendChild(li5)
li5.innerHTML = "Peru"


// Audio tag creation with using Javascript

let audio = document.createElement("audio")
document.body.appendChild(audio)

audio.setAttribute("controls", "")
audio.setAttribute("src", "")


// Video tag creation with using Javascript

let vdo = document.createElement("video")
document.body.appendChild(vdo)

vdo.setAttribute("controls", "")
vdo.setAttribute("src", "")


// With Using Array --> create order list(Best Option) 

let ol = document.createElement("ol")
document.body.appendChild(ol)

ol.setAttribute("type", "A")

let bikes = ["NS400", "RE Bullet 350", "Splendor", "GT 650"]

bikes.forEach((ele) => {
    let li = document.createElement("li")
    li.innerHTML = ele
    ol.appendChild(li)
})