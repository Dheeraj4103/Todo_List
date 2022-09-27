import './index.css'
import 'boxicons'
import "./taskstyle.css";

import { addTask } from './createitem';
import { add_project } from "./addproject";


const add_prj_btn = document.getElementById('add-project-btn');
const projectform = document.getElementById('project-form');

projectform.addEventListener('submit', function (e) {
    console.log("We are in eventlistner");
    e.preventDefault();
});

add_prj_btn.onclick = () => {
    console.log("clicked")
    projectform.style.display = "flex";
}

const projectsubmit = document.getElementById('project-submit');
projectsubmit.onclick = () => {
    console.log("project submitted");
    projectform.style.display = "none";
    add_project(projectform[0].value);
}

const addtask = document.getElementById('add-task-btn');

const items = document.getElementById('task-content');

const form = document.getElementById("task-form");

const submittask = document.getElementById("task-submit");

addtask.onclick = () => {
    form.style.display = "flex";
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

submittask.onclick = () => {
    console.log("Clicked on task");
    // addTask(form);
    items.appendChild(addTask(form));
    form.reset()
    form.style.display = "none"
}