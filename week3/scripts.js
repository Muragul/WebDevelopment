task = document.getElementById("task");
list = document.getElementById("todo");

function addItem(){
    let item = document.createElement("li");
    let box = document.createElement("input");
    box.type = "checkbox";
    box.onclick = function(){
        label.classList.toggle("checkedLabel");
    }
    let label = document.createElement("label");
    label.innerHTML = task.value;
    let button = document.createElement("button");
    button.className = "delete";
    button.innerText = "del";
    button.onclick = function(){
        list.removeChild(item);
    };
    item.appendChild(box);
    item.appendChild(label);
    item.appendChild(button);
    list.appendChild(item);
    task.value="";
}