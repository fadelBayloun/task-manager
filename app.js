let addButton = document.getElementById("add-task-button");
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");
let tasks = [];

// Adding new task
addButton.addEventListener("click", function () {
  let taskName = taskInput.value.trim();

  //   validation for empty task name
  if (taskName !== "") {
    let task = {
      name: taskName,
      id: tasks.length,
    };
    tasks.push(task);
    console.log(tasks);
  }
});
