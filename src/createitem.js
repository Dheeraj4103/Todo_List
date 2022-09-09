import "./index.css";
import "boxicons";

import "./taskstyle.css";



function createTask(title) {
  const task = document.createElement("div");
  task.className = "task";
  const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  task.appendChild(checkbox);
  const taskname = document.createElement("h2");
  taskname.innerHTML = title;
  task.append(taskname);
  return task;
}

export { createTask };
