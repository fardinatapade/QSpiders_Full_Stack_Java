let form = document.getElementById("form")
let user = document.getElementById("user")
let pass = document.getElementById("pass")

// Submit Event : It is a Javascript form event whenever the form gets submitted this particular event gets triggered 

// Event : It is parameter which holds the properties of current event 
form.addEventListener("submit", (Event) => {
    // console.log("Hi, Im submit Event")
    Event.preventDefault()
    // console.log(Event);

    if (user.value === "") {
        alert("Username Is Required")
    }

    if (pass.value === "") {
        alert("Password is Required")
    }

    let Person = {
        UserName: user.value,
        PassWord: pass.value
    }

    console.log(Person);

    user.value = ""
    pass.value = ""
})

user.addEventListener("focus", (Event)=> {
    document.getElementById("para").innerHTML = "Username is Required !"
})

user.addEventListener("blur", (Event) => {
    document.getElementById("para").innerHTML = ""
})

user.addEventListener("keypress", ()=> {
    user.style.backgroundColor = "red"
})

user.addEventListener("keyup", ()=> {
    user.style.backgroundColor = "blue"
})



