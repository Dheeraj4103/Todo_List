import './index.css'
import 'boxicons'

function ProjectFormInfo() {
    const form = document.getElementById('project-form')
}

function add_project(project_title){
    const logo = document.createElement('span');
    logo.className = "icon";
    var tp = document.createElement('i');
    var list = tp.classList;
    list.add('bx')
    list.add('bxs-label')
    list.add('bx-md')
    list.add('bx-spin-hover');
    logo.appendChild(tp);

    var btn = document.createElement('button');
    btn.className = "projects"

    btn.appendChild(logo);

    var item = document.createElement('span');
    item.innerHTML = project_title;
    btn.appendChild(item);

    var contents = document.getElementById('contents');
    contents.appendChild(btn);
}

export { add_project };