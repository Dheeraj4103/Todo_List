import "./index.css";
import "boxicons";
import "./taskstyle.css";

import { createTask, Task } from "./createitem";
import { add_project, Create_Project } from "./addproject";

const add_prj_btn = document.getElementById("add-project-btn");
const projectform = document.getElementById("project-form");

projectform.addEventListener("submit", function (e) {
  console.log("We are in eventlistner");
  e.preventDefault();
});

add_prj_btn.onclick = () => {
  console.log("clicked");
  projectform.style.display = "flex";
};

let daily = new Create_Project("Daily", []);
let College = new Create_Project("College", []);

let task1 = new Task("New task", "2022-12-01", "High", "", false);
let task3 = new Task("OOP", "2022-12-01", "High", "", false);
let task4 = new Task("Machine Learning", "2022-12-01", "Low", "", false);

daily.tasks.push(task1);

College.tasks.push(task3);
College.tasks.push(task4);

let projectlist = [daily, College];

let currentproject = daily;

function Projectloop(projects) {
  for (let i = 0; i < projects.length; i++) {
    console.log(projects[i]);
    const project = document.getElementById(projects[i].title);
    project.onclick = () => {
      currentproject = projects[i];
      console.log(currentproject.title);
      ShowProjectTasks(projects[i]);
    };
  }
}
Projectloop(projectlist);

function ShowProjectTasks(project) {
  items.innerHTML = "";
  for (let i = 0; i < project.tasks.length; i++) {
    items.appendChild(createTask(project.tasks[i]));
  }
}

const projectsubmit = document.getElementById("project-submit");
projectsubmit.onclick = () => {
  projectform.style.display = "none";
  const newprjt = new Create_Project(projectform[0].value, []);
  console.log(newprjt);
  const adding = add_project(newprjt.title);
  adding.id = newprjt.title;
  var contents = document.getElementById("contents");
  contents.appendChild(adding);
    projectlist.push(newprjt);
    console.log(projectlist);
  console.log("project submitted");
  Projectloop(projectlist);
};

const addtask = document.getElementById("add-task-btn");

var items = document.getElementById("task-content");

const form = document.getElementById("task-form");

const submittask = document.getElementById("task-submit");

const projects = document.getElementsByClassName("projects");

addtask.onclick = () => {
  form.style.display = "flex";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

submittask.onclick = () => {
  console.log("Clicked on task");
  let task = new Task(
    form[0].value,
    form[1].value,
    form[2].value,
    form[3].value,
    false
  );
  currentproject.tasks.push(task);
  form.reset();
  form.style.display = "none";
  console.log(daily);
  ShowProjectTasks(currentproject);
};
