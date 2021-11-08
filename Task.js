class Task {
    constructor(title, listOfTasks){
        this.title = title
        this.completed = false
        this.id = this.uuid()
        this.listOfTasks = listOfTasks
        this.listOfTasks.push(this)
        this.createTemplate()
        this.addListeners()
    }

    createTemplate(){
        const tr = document.createElement('tr')
        let html = 
        ` 
            <th class="tache" scope="row">${this.title}</th>
            <td><button class="btnDelete btn btn-outline-dark">X</button></td>
        `
        tr.innerHTML = html
        this.template = tr
    }

    addListeners(){
        
        this.template.querySelector("th").addEventListener("click", this.strike.bind(this))
        this.template.querySelector(".btnDelete").addEventListener("click", this.delete.bind(this))
    }

    strike(){
        this.completed = !this.completed
        if(this.completed){
            this.template.classList.add("active")
        }
        else{
            this.template.classList.remove("active")
        }

    }

    delete(){
        this.template.remove()
        this.listOfTasks.splice(this, 1)
        console.log(this.listOfTasks)
    }

    uuid() {
        let d = new Date().getTime(),
          d2 = (performance && performance.now && performance.now() * 1000) || 0;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          let r = Math.random() * 16;
          if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
          } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
          }
          return (c == "x" ? r : (r & 0x7) | 0x8).toString(16);
        });
      }

}