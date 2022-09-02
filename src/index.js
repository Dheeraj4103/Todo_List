import './index.css'
import 'boxicons'

const logo = document.createElement('span');
logo.className = "icon";
var tp = document.createElement('i');
var list = tp.classList;
list.add('bx')
list.add('bxs-label')
list.add('bx-md')
logo.appendChild(tp);

var btn = document.createElement('button');
btn.className = "projects"

btn.appendChild(logo);

var item = document.createElement('span');
item.innerHTML = "Hello"
btn.appendChild(item)

var contents = document.getElementById('contents');
contents.appendChild(btn);

let nodelist = sidebar.childNodes;


