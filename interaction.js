const form = document.forms["tasks"]
const task = form["entry"]
form.addEventListener("submit", (submission)=>{
    submission.preventDefault()
    const new_task = task.value
    const element = document.createElement("li")
    element.innerHTML = '<i onclick="taskdone(this)" class="fa-solid fa-circle-check"></i>' + new_task + '<i onclick="taskremove(this)" class="fa-solid fa-minus"></i>'
    list.appendChild(element)
})

function taskremove(element){
    element.parentElement.remove()
}
function taskdone(element){
    if(element.style.color == "green"){
        element.style.color = "gray"
        element.parentElement.style.textDecoration = "none"

    }
    else{
        element.style.color = "green"
        element.parentElement.style.textDecoration = "line-through"
    }
}
