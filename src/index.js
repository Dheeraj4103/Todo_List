import './index.css'
import 'boxicons'


var tp = document.createElement('i');
var list = tp.classList;
list.add('bx')
list.add('bxl-github')
list.add('bx-md')


var btn = document.createElement('button');
btn.className = "projects"

btn.appendChild(tp);

var item = document.createElement('span');
item.innerHTML = "Hello"
btn.appendChild(item)

var sidebar = document.getElementById('side-bar');
// sidebar.appendChild(btn);

let nodelist = sidebar.childNodes;


