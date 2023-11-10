let list = document.getElementsByTagName("ul")[0];
let addButton = document.getElementById("addButton");
let input = document.getElementById("task");

addButton.addEventListener("click", function (e) {
  if (input.value !== "") {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    let span = document.createElement("span");
    span.innerHTML = input.value;
    li.appendChild(span);
    input.value = "";

    let deleteIcon = document.createElement("i");
    deleteIcon.innerText = "delete";
    deleteIcon.classList.add("material-icons");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.appendChild(deleteIcon);
    li.appendChild(deleteButton);

    let editIcon = document.createElement("i");
    editIcon.innerText = "edit";
    editIcon.classList.add("material-icons");
    let editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.appendChild(editIcon);
    li.appendChild(editButton);

    editButton.addEventListener("click", function (e) {
      let target;
      if (e.target.parentElement.classList.contains("editButton")) {
        target = e.target.parentElement.parentElement;
      } else {
        target = e.target.parentElement;
      }
      let newText = prompt("Enter your edited task");
      if (newText) {
        target.innerHTML = "";
        target.appendChild(checkbox);
        span.innerHTML = newText;
        target.appendChild(span);
        target.appendChild(deleteButton);
        target.appendChild(editButton);
      }
    });

    deleteButton.addEventListener("click", function (e) {
      if (e.target.parentElement.classList.contains("deleteButton")) {
        e.target.parentElement.parentElement.remove();
      } else {
        e.target.parentElement.remove();
      }
    });

    let checkboxInputElement = li.querySelector("input");
    checkboxInputElement.addEventListener("change", function (e) {
      const span = e.target.nextElementSibling;
      if (e.target.checked) {
        span.className = "text-transform";
      } else {
        span.className = "";
      }
    });

    list.appendChild(li);
  }
});
