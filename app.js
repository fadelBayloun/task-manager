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
    taskList.innerHTML += `<li>${task.name}
    <button id="delete-task-button" class="${task.id}">Delete</button></li>`;

    // Deleting the task from Html and From Tasks Array
    let deleteButton = document.querySelector("." + task.id.toString());
    deleteButton.addEventListener("click", function (e) {
      let parent = e.target.parentElement;
      parent.remove();
    });
  }
});

//   let taskid = Number(e.target.className);
//   console.log(parent);
//   tasks.splice(taskid, 1);

// Editing the task in Html and in Tasks Array
// let editButton = document.getElementById("edit-task-button");
// editButton.addEventListener("click", function (e) {
//   parent = e.target.parentElement;
//   taskid = Number(e.target.className);
//   newTask = prompt("Enter your new value");
//   tasks[taskid].name = newTask;
//   parent.innerHTML += `<li>${newTask}<button id="edit-task-button" class="${task.id}">edit</button>
// <button id="delete-task-button" class="${task.id}">Delete</button></li>`;
// });

// <button id="edit-task-button" class="${task.id}">edit</button>
