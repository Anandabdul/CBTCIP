let addedTask = JSON.parse(localStorage.getItem("tasksAdded")) || [];
let completedTask = JSON.parse(localStorage.getItem("completedTasks")) || [];

function addTask() {
  let userInput = document.getElementById("userInput");
  addedTask.push(userInput.value);
  setTasks();
  displayAddedTask();
  document.getElementById("userInput").value = "";
}
  
function setTasks() {
  localStorage.setItem("tasksAdded", JSON.stringify(addedTask));
  localStorage.setItem("completedTasks", JSON.stringify(completedTask));
}

function displayAddedTask() {
  let tasksAddedHTML = "";
  addedTask.forEach((task, index) => {
    tasksAddedHTML += `<div class="d-flex align-items-center"><div class="task-name d-flex">${task}</div>
    <div class="d-flex me-1 justify-content-end">
      <button style="background-color: #73a8dd;" class="btn updateButton js-finish" data-fin-index="${index}"><svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="white"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg></button>
      <button style="background-color: #c89df0;" class="btn updateButton js-delete" data-del-index="${index}"><svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="white"><path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z"/></svg></button>
    </div>
    </div>`;
  });
  document.getElementById("tasksAdded").innerHTML = tasksAddedHTML;
  finishAction();
}

function displayCompletedTask() {
  let tasksCompletedHTML = "";
  completedTask.forEach((task) => {
    tasksCompletedHTML += `<div class="task-name my-2">
    <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="green"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
    <s class="text-secondary">${task}</s>
    </div>`;
  });
  document.getElementById("tasksCompleted").innerHTML = tasksCompletedHTML;
  deleteAction();
}

function finishAction() {
  document.querySelectorAll(".js-finish").forEach((element) => {
    element.addEventListener("click", () => {
      const finIndex = element.dataset.finIndex;
      finishTask(finIndex);
    });
  });
}

function deleteAction() {
  document.querySelectorAll(".js-delete").forEach((element) => {
    element.addEventListener("click", () => {
      const delIndex = element.dataset.delIndex;
      deleteTask(delIndex);
    });
  });
}

function finishTask(index) {
  completedTask.push(addedTask[index]);
  addedTask.splice(index, 1);
  setTasks();
  displayAddedTask();
  displayCompletedTask();
}

function deleteTask(index) {
  addedTask.splice(index, 1);
  setTasks();
  displayAddedTask();
  displayCompletedTask();
}

function clearCompletedTask() {
  localStorage.removeItem('completedTasks');
  completedTask = [];
  displayCompletedTask();
}