//JS variables
let arrayTodo = [];
let completedCount = 0;

//HTML variables
const input = document.getElementById("input");
const listTasks = document.getElementById("listTasks");
const alertInput = document.querySelector("small");
const completeInfo = document.querySelector("p");

function addTask() {
  if (input.value === "") {
    alertInput.innerText = "Input must not be empty";
  } else {
    alertInput.innerText = "";
    arrayTodo.push(input.value);

    let item = document.createElement("li");
    listTasks.appendChild(item);

    let itemLabel = document.createElement("span");
    itemLabel.id = "task";
    itemLabel.innerText = input.value;
    item.appendChild(itemLabel);

    let trashcan = document.createElement("span");
    trashcan.innerHTML = "&#x1F5D1";
    trashcan.id = "trash";
    item.appendChild(trashcan);
  }
}

listTasks.addEventListener("click", function (e) {
  if (e.target.classList.contains("completed")) {
    console.log("item");
    e.target.classList.remove("completed");
    completedCount--;
  } else {
    e.target.classList.add("completed");
    completedCount++;
  }
  completeInfo.innerText = `${completedCount} completed`;
});

listTasks.addEventListener("click", function (e) {
  if (e.target.id === "trash") {
    console.log("trash");
    e.target.parentElement.remove();
    let indexToRemove = arrayTodo.indexOf(input.value);
    arrayTodo.splice(indexToRemove, 1);
    console.log(arrayTodo);
    completeInfo.innerText = `${completedCount} completed`;
    if (e.target.parentElement.classList.contains("completed")) {
      completedCount--;
    }
  }
});

let trashcan = document.createElement("span");
trashcan.id = "trash";
trashcan.innerHTML = "&#x1F5D1";
item.appendChild(trashcan);
