const todo_input = document.querySelector(".todo_input");
const todo_button = document.querySelector(".todo_button");
const todo_ulist = document.querySelector(".todo_ulist");
const filter_todo = document.querySelector(".filter-todo");

// add event listner
todo_button.addEventListener("click", addItem);
todo_ulist.addEventListener("click", check_delete);
filter_todo.addEventListener("click",filterTodo);


// function

function addItem(event) {
  event.preventDefault();
  //  create div
  const todo_items_container = document.createElement("div");
  todo_items_container.classList.add("todo_items_container");

  // create li
  const todo_items = document.createElement("li");
  todo_items_container.appendChild(todo_items);


  todo_items.classList.add("todo_items");
  todo_items.innerHTML = todo_input.value;
  todo_input.value = "";

  // create check_button
  const check_button = document.createElement("button");
  check_button.classList.add("checkButton");
  check_button.innerHTML = '<i class="fas fa-check"></i>';
  todo_items_container.appendChild(check_button);

  // create trash button
  const trash_button = document.createElement("button");
  trash_button.classList.add("trashButton");
  trash_button.innerHTML = '<i class="fas fa-trash"></i>';
  todo_items_container.appendChild(trash_button);

  // append todo_items_container in ul
  todo_ulist.appendChild(todo_items_container);
  

}

// check delete function
  function check_delete(e) {
    const checkButton_control = e.target;
   const deleteButton_control= e.target;
    if (deleteButton_control.classList[0] === "trashButton") {
      const todo_items_container = deleteButton_control.parentElement;
      todo_items_container.classList.add("deleted");

      todo_items_container.addEventListener("transitionend", function () {
        todo_items_container.remove();
      });
    }
    if (checkButton_control.classList[0] === "checkButton") {
      const todo_items_container= checkButton_control.parentElement;
      todo_items_container.classList.toggle("checked");
    }
  }

    
// filter function
function filterTodo(e) {
  const todos = todo_ulist.childNodes;
todos.forEach(function(i){ //here i is any variable use in anonymous function
    switch (e.target.value) {
      case "all":
        i.style.display = "flex";
        break;
      case "completed":
        if (i.classList.contains("checked")) {
          i.style.display = "flex";
        } else {
          i.style.display = "none";
        }
        break;
      case "incomplete":
        if (!i.classList.contains("checked")) {
          i.style.display = "flex";
        } else {
          i.style.display = "none";
        }
    }
});
}
