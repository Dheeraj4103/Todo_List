import "./index.css";
import "boxicons";
import "./taskstyle.css";


function Task(title, duedate, priority, notes, status) {
  this.title = title;
  this.duedate = duedate;
  this.priority = priority;
  this.notes = notes;
  this.status = status;
  return { title, duedate, priority, notes, status };
};




function createTask(newtask) {
  const task = document.createElement("div");
  task.className = "task";
  const box = document.createElement("input");
  box.className = "check-task";
  box.type = "checkbox";
  task.appendChild(box);
  const taskname = document.createElement("h2");
  taskname.innerHTML = newtask.title;
  task.append(taskname);
  return task;
}

function addTask(form) {
  let task = new Task(form[0].value, form[1].value, form[2].value, form[3].value, false);
  console.log(task)
  let newtask = createTask(task);

  return newtask;
}

export { addTask };
