
let listOfTodo = []
let btnAdd = document.querySelector(".btnAjouter")
let tbody = document.querySelector(".tbody")
let btnsDelete = document.querySelectorAll(".btnDelete")
let todoTaches = document.querySelectorAll(".taches")
let inputText = document.querySelector(".todoText")
let taskId = 0
var task


// function showTodo(){
//     let ligneTodo = document.createElement("tbody")
//     let html
//     listOfTodo.forEach(e => {
//         html = ` <tr>
//             <th scope="row">${e.value}</th>
//             <td><button class="btn btn-outline-dark">X</button></td>
//         </tr> `
//     });
//     ligneTodo.innerHTML = html
// }
function addListener(){
    btnAdd.addEventListener("click", addTask)
    
}

function addTask(){
    const value = inputText.value
    task = new Task(value)
    inputText.value = ''
    tbody.append(task.template)
    listOfTodo.push(task)
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



