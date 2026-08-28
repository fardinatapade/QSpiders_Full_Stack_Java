// Modern Event <-- We must prefer to use Modern Event

let btn = document.getElementById("btn").addEventListener("click", () => {
    alert("Hi, This is Modern Event")
    let text = document.getElementById("text").innerHTML = "Hii"
})


// Traditional Event

const getContent = () =>  {
    let h1 = document.createElement("h1")
    document.body.appendChild(h1)
    h1.innerHTML = "Hi ! Button Is Clicked" 
}


let image = document.getElementById("image")
let img = document.getElementById("img")


/* Mouse Over Event
image.addEventListener("mouseover", () => {
    img.src = "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F0425%2Fr203036_1296x729_16%2D9.jpg"
}) */
 

/* Click Event
image.addEventListener("click", () => {
    img.src = "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F0425%2Fr203036_1296x729_16%2D9.jpg"
}) */

/* KeyPress Event
image.addEventListener("keypress", () => {
    img.src = "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F0425%2Fr203036_1296x729_16%2D9.jpg"
}) */

/* KeyDown Event
image.addEventListener("keydown", () => {
    img.src = "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F0425%2Fr203036_1296x729_16%2D9.jpg"
}) */

// KeyUp Event
image.addEventListener("keyup", () => {
    img.src = "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F0425%2Fr203036_1296x729_16%2D9.jpg"
}) 

// Play And Pause Event
let video = document.getElementById("video")
let Status = document.getElementById("status")

video.addEventListener("play", ()=> {
    Status.innerHTML = "Video Is Playing"
})

video.addEventListener("pause", ()=> {
    Status.innerHTML = "Video Is Paused"
})


// Scroll Event

window.addEventListener("scroll", ()=> {
    document.getElementById("scrolls").innerHTML = `Im scrolling by ${window.scrollY}`
})