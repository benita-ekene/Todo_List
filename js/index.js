let todoList = [];

// retrieve todoList from localStorage if it exists
if (localStorage.getItem("todoList")) {
    todoList = JSON.parse(localStorage.getItem("todoList"));
    renderList();
}

// add item to todoList
function addItem() {
    const item = document.getElementById("item").value.trim();
    if (item !== "") {
        todoList.unshift(item);
        localStorage.setItem("todoList", JSON.stringify(todoList));
        renderList();
        document.getElementById("item").value = "";
    }
}

// edit item in todoList
function editItem(item) {
    const index = todoList.indexOf(item);
    const updatedItem = prompt("Update item:", item);
    if (updatedItem !== null) {
        todoList[index] = updatedItem.trim();
        localStorage.setItem("todoList", JSON.stringify(todoList));
        renderList();
    }
}

// delete item from todoList
function deleteItem(item) {
    const index = todoList.indexOf(item);
    if (index > -1) {
        todoList.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(todoList));
        renderList();
    }
}

// render todoList
function renderList() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        const item = todoList[i];
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = item;
        li.appendChild(span);
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-button");
        editBtn.addEventListener("click", function() {
            editItem(item);
        });
        li.appendChild(editBtn);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-button");
        deleteBtn.addEventListener("click", function() {
            deleteItem(item);
        });
        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
}

// add event listener to add button
document.getElementById("add-btn").addEventListener("click", addItem);
