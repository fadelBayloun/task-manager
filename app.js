let list = document.getElementsByTagName("ul")[0];
let addButton = document.getElementById("addButton");
let input = document.getElementById("task");

addButton.addEventListener("click", function (e) {
  if (input.value !== "") {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");
    deleteButton.innerText = "delete";
    editButton.innerText = "edit";
    li.innerText = input.value;
    input.value = "";
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    editButton.addEventListener("click", function (e) {
      let target = e.target.parentElement;
      target.innerText = prompt("Enter your edited task");
      target.appendChild(deleteButton);
      target.appendChild(editButton);
    });
    deleteButton.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    });
    list.appendChild(li);

    // add the li to the local storage or array thing

    document.body.appendChild(li);
  }
});
