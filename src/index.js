import './index.css'
import 'boxicons'

import { add_project } from "./addproject";


const add_prj_btn = document.getElementById('add-project-btn');
const projectform = document.getElementById('project-form');

projectform.addEventListener('submit', function(e) {
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




