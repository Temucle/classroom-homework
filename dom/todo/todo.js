document.getElementById("date").innerHTML =
  `Он сар өдөр : ` +
  new Date().getFullYear() +
  "-" +
  new Date().getMonth() +
  "-" +
  new Date().getDate();
let taskName = document.getElementById("taskName");
let addButton = document.getElementById("add-btn");
let taskList = document.getElementById("taskList");
function addNewBox() {
  let taskName = document.getElementById("taskName");
  let taskBoxEl = `     <div id="taskBox">
<div id="taskBox-content">
  <div id="taskText">
    <p>${taskName.value}</p>
  </div>
  <div id="taskButtons">
    <button class="taskBoxButton" type="button">
      <img
        class="box-img"
        alt="edit-btn"
        src="https://img.icons8.com/ios/512/pencil.png"
      />
    </button>
    <button class="taskBoxButton" type="button">
      <img
        class="box-img"
        alt="check-btn"
        src="https://img.icons8.com/material-outlined/512/checked-checkbox.png"
      />
    </button>
    <button class="taskBoxButton" type="button">
      <img
        class="box-img"
        alt="remove-btn"
        src="https://img.icons8.com/ios-glyphs/512/delete-forever.png"
      />
    </button>
  </div>
</div>
</div>`;
  taskList.innerHTML = taskBoxEl + taskList.innerHTML;
  taskName.value = ""
}
addButton.addEventListener("click", addNewBox);