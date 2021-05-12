// Clearing the console when refreshing the page
console.clear();

// Selectors
let textInput = document.querySelector(".todo-input");
let toDoList = document.querySelector(".todo-list");
let addBtn = document.querySelector(".todo-btn");
let filterSelect = document.querySelector(".filter-todo");
let nameHdr = document.querySelector("h1");
let clearBtn = document.querySelector(".clear-Btn");

// Username Prompt


// Event Listener
addBtn.addEventListener("click", add);
filterSelect.addEventListener("click", filterTodo);
clearBtn.addEventListener("click", clearList);
// Functions
function add(event) {
  event.preventDefault();

  let toDoDiv = document.createElement("div");
  let newLi = document.createElement("li");
  let compBtn = document.createElement("button");
  let trashBtn = document.createElement("button");
  let starBtn = document.createElement("button");

  toDoDiv.classList.add("todo");
  compBtn.classList.add("comp-Btn");
  newLi.classList.add("todo-item");
  trashBtn.classList.add("trash-Btn");
  starBtn.classList.add("star-Btn");

  compBtn.innerHTML = '<i class="fas fa-check"></i>';
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  starBtn.innerHTML = '<i class="fas fa-star"></i>';

  compBtn.addEventListener("click", check);

  function check(event) {
    toDoDiv.classList.toggle("completed");
  }

  trashBtn.addEventListener("click", deleted);

  function deleted(event) {
    toDoDiv.classList.add("fall");
    toDoDiv.addEventListener("transitionend", function () {
      toDoDiv.remove();
    });
  }

  starBtn.addEventListener("click", star);

  function star(event) {
    toDoDiv.classList.toggle("stared");
  }
  if (textInput.value.length === 0) alert("You must write somthing");
  else {
    newLi.textContent = textInput.value;

    toDoList.appendChild(toDoDiv);
    toDoDiv.appendChild(newLi);
    toDoDiv.appendChild(compBtn);
    toDoDiv.appendChild(starBtn);
    toDoDiv.appendChild(trashBtn);

    textInput.value = "";
  }
}

// Filter Function

function filterTodo(event) {
  const todos = toDoList.childNodes;

  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "starred":
        if (todo.classList.contains("stared")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function clearList(event) {
  const todos = toDoList.childNodes;

  for (let i = 0; i <= todos.length + 1; i++) {
    todos.forEach(function (todo) {
      todo.remove();
    });
  }
}
