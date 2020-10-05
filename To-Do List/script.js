const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

todobutton.addEventListener("click", addtodoevent);

function addtodoevent(event) {
  event.preventDefault();
  console.log("heyyy");

  const tododiv = document.createElement("div");
  tododiv.classList.add("todo");
  const newtodo = document.createElement("li");
  newtodo.innerText = "heyyyy";
  newtodo.classList.add("todo-item");
  tododiv.appendChild(newtodo);

  const completedbutton=document.createElement("button")
  completedbutton.innerHTML='<i class="fas fa-check"></i>'
  completedbutton.classList.add("complete-btn")
  tododiv.appendChild(completedbutton)


  const deletedbutton=document.createElement("button")
  deletedbutton.innerHTML='<i class="fas fa-trash"></i>'
  deletedbutton.classList.add("delete-btn")
  tododiv.appendChild(deletedbutton)

  todolist.appendChild(tododiv)
}
