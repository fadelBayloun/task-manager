let list = document.getElementsByTagName("ul")[0];
let addButton = document.getElementById("addButton");
let input = document.getElementById("task");

addButton.addEventListener("click", function (e) {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.innerText = input.value;
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
      let target = e.target.parentElement;
      let newText = prompt("Enter your edited task");
      if (newText !== "") {
        target.innerText = newText;
        target.appendChild(deleteButton);
        target.appendChild(editButton);
      }
    });

    deleteButton.addEventListener("click", function (e) {
      console.log(e.target.parentElement);
      if (e.target.parentElement.classList.contains("deleteButton")) {
        e.target.parentElement.parentElement.remove();
      } else {
        e.target.parentElement.remove();
      }
    });

    list.appendChild(li);
    // add the li to the local storage or array thing
    document.body.appendChild(li);
  }
});
