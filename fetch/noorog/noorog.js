ToDoListEl = document.getElementById("Todolist");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res1) => {
    console.log(res1)
    return res1.json();
  })
  .then((todos) => {
    for (let i = 0; i < todos.length; i++) {
      let Task = document.createElement("li");
      Task.innerHTML = todos[i].title;
      ToDoListEl.append(Task);
    }
  });
