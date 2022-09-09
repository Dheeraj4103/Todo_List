import './index.css'
import 'boxicons'






function createTask(title) {
    const task = document.createElement('div');
    task.className = "task";
    task.style.display = "flex";
    task.style.flexDirection = "row";
    const checkbox = document.createElement('i');
    let list = checkbox.classList;
    list.add('bx');
    list.add('bx-checkbox');
    task.appendChild(checkbox);
    const taskname = document.createElement('h2');
    taskname.innerHTML = title;
    task.append(taskname);
    return task;
}

export { createTask };