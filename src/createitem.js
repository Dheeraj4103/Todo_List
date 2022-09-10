import "./index.css";
import "boxicons";
import "./taskstyle.css";


function Task(title, duedate, priority, status) {
  this.title = title;
  this.duedate = duedate;
  this.priority = priority;
  this.status = status;
  return { title, duedate, priority, status };
};




function createTask(title) {
  const task = document.createElement("div");
  task.className = "task";
  const box = document.createElement("input");
  box.className = "check-task";
  box.type = "checkbox";
  task.appendChild(box);
  const taskname = document.createElement("h2");
  taskname.innerHTML = title;
  task.append(taskname);
  return task;
}

export { createTask };
