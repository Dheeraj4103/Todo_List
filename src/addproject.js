import "./index.css";
import "boxicons";

function ProjectFormInfo() {
  const form = document.getElementById("project-form");
}

function Create_Project(title, tasks) {
  this.title = title;
  this.tasks = tasks;
  return { title, tasks };
}

function add_project(project_title) {
  const logo = document.createElement("span");
  logo.className = "icon";
  var tp = document.createElement("i");
  var list = tp.classList;
  list.add("bx");
  list.add("bxs-label");
  list.add("bx-md");
  list.add("bx-spin-hover");
  logo.appendChild(tp);

  var btn = document.createElement("button");
  btn.className = "projects";

  btn.appendChild(logo);

  var item = document.createElement("span");
  item.innerHTML = project_title;
  btn.appendChild(item);

  return btn;
}

export { add_project, Create_Project };
