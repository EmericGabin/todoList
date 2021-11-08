let listOfTodo = []
let btnAdd = document.querySelector(".btnAjouter")
let tbody = document.querySelector(".tbody")
let btnsDelete = document.querySelectorAll(".btnDelete")
let todoTaches = document.querySelectorAll(".taches")
let inputText = document.querySelector(".todoText")
let taskId = 0
var task

function addListener(){
    btnAdd.addEventListener("click", addTask)
    
}

function addTask(){
    const value = inputText.value
    task = new Task(value, listOfTodo)
    inputText.value = ''
    tbody.append(task.template)
    console.log(listOfTodo)

    //const btnDelete = task.template.querySelector(".btnDelete")
    // btnDelete.setAttribute("index", taskId)
    // btnDelete.addEventListener("click", () => {
    //     const index = parseInt(btnDelete.getAttribute("index"))
    //     listOfTodo.splice(index)
    //     console.log(listOfTodo)
    //     const taches = tbody.querySelectorAll("tr")
    //     console.log(taches[index])
    //     tbody.removeChild(taches[index])
    // })
    //taskId++

}

addListener()



