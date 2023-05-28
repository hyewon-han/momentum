const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //우리가 클릭한 li.id와 다른 toDo는 남기고 배열에 다시 저장
  saveToDo();
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerHTML = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.style.border = "none";
  button.style.marginLeft = "10px";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
  //만약 ToDos가 localStorage에 존재하면 실행할 문장
  const parsedToDos = JSON.parse(saveToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function sexyFilter(item) {
  return;
}

[1, 2, 3, 4].filter(sexyFilter);
