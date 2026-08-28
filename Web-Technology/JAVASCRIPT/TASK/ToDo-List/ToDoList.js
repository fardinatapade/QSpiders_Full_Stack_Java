let task = document.getElementById("task")
let btn = document.getElementById("btn")
let list = document.getElementById("list")

btn.addEventListener("click", ()=> {

    if(task.value !== ""){
        let li = document.createElement("li")
        li.classList.add("task")
        list.appendChild(li)
        li.innerHTML = 
            `${task.value}
        <div class="btngrp">
          <button class="delete">
          <i class="fa-solid fa-trash"></i>
          </button>

          <button class="update">
          <i class="fa-regular fa-pen-to-square"></i>  
          </button> 
          </div>
          `

          li.querySelector(".delete").addEventListener("click", ()=> {
            li.remove();
          })

          li.querySelector(".update").addEventListener("click", ()=> {
            let newTask = prompt(`Update a Task : ` , task.value)

            if(newTask !== "" && newTask !== null) {
                li.firstChild.textContent = newTask
            }
            else {
                alert("Please Enter a Task !")
            }
          })


        task.value = ""
    }
    else {
        alert("Please Enter a Task")
    }
})