function fun() {
  let taskName = document.getElementById("tk").value;
  const card = document.querySelector(".card");
  var taskTab = document.createElement("div");
  taskTab.className = "card bg-primary text-white fill m-3";
  taskTab.setAttribute("draggable", "true");
  var taskTabBody = document.createElement("div");
  taskTabBody.classList.add("card-body");
  var taskNameNode = document.createTextNode(taskName);
  var closeButton = document.createElement("span");
  closeButton.setAttribute("onclick", "rem(this)");
  closeButton.className = " btn btn-light float-right btn-sm";
  var closeText = document.createTextNode("X");
  closeButton.appendChild(closeText);
  taskTabBody.appendChild(taskNameNode);
  taskTabBody.appendChild(closeButton);
  taskTab.appendChild(taskTabBody);
  taskTab.addEventListener("dragstart", dragStart);
  taskTab.addEventListener("dragend", dragEnd);
  card.appendChild(taskTab);
}

function rem(a) {
  console.log(a);
  //selecting current dropzone
  var current_Dropzone = a.parentNode.parentNode.parentNode;
  //selecting current task
  var currentTask = a.parentNode.parentNode;
  //removing current task from current drop zone
  current_Dropzone.removeChild(currentTask);
}

//represents drop zones(Backlog, Inprogress, Approved, Done)
const empties = document.querySelectorAll(".empty");

let isDraggedOver = 0,
  currentDraggedNode;

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = " invisible"), 0);
  currentDraggedNode = this;
  console.log("drag Start");
}

function dragEnd() {
  this.className = " card bg-primary text-white fill m-3";
  currentDraggedNode = this;
  console.log("drag End");
}

function dragOver(e) {
  //this represents drop zone
  // by default we will get stop symbol when dragged to drop zone
  // to prevent this we use below line
  e.preventDefault();
  if (isDraggedOver == 0) {
    this.className += " hovered";
    isDraggedOver = 1;
  }
  console.log("drag Over");
}

function dragLeave() {
  //this represents drop zone
  isDraggedOver = 0;
  this.className = " card bg-light text-dark empty m-3";
  console.log("drag Leave");
}

function dragDrop() {
  //this represents drop zone
  this.className = " card bg-light text-dark empty m-3";
  this.append(currentDraggedNode);
  console.log("drag Drop");
}
