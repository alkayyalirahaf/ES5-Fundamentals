// Select DOM Elements
const taskInput = document.querySelector("#taskInput");
const todoForm = document.querySelector("#todoForm");
const taskList = document.querySelector("#taskList");
const clearBtn = document.querySelector("#clearBtn");
const taskCount = document.querySelector("#taskCount");

// Constructor function to build a Task object
function Task(text) {
    this.id = Date.now() // Unique ID
    this.text = text;
    this.completed = false; // Initial completed status
}

// Retrieve data using JSON.parse()
let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

// Save data using JSON.stringify()
function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    updateTaskCount();
}

// Display the number of tasks using the stored data
function updateTaskCount() {
    taskCount.textContent = tasksArray.length;
}

// Render a single task element to the DOM
function renderTask(taskObj) {
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    taskSpan.textContent = taskObj.text;
    deleteBtn.textContent = "Delete";

    // Mark task as completed on load if true
    if (taskObj.completed) {
        taskSpan.classList.add("completed");
    }

    //  Mark tasks as completed (Toggle on click)
    taskSpan.addEventListener("click", () => {
        taskObj.completed = !taskObj.completed;
        taskSpan.classList.toggle("completed");
        saveToLocalStorage();
    });

    // Delete individual tasks
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
        tasksArray = tasksArray.filter(task => task.id !== taskObj.id);

        if (tasksArray.length === 0) {
            localStorage.removeItem("tasks");
        } else {
            saveToLocalStorage();
        }

        updateTaskCount();
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
}

// Display all saved tasks after refreshing the page
tasksArray.forEach(task => renderTask(task));
updateTaskCount();

// Add a new task
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    taskInput.value = "";
    const newTask = new Task(taskText);
    tasksArray.push(newTask);

    saveToLocalStorage();
    renderTask(newTask);
});

// Add a button to clear all tasks
clearBtn.addEventListener("click", () => {
    localStorage.clear(); // Wipes localStorage for this origin
    tasksArray = [];
    taskList.innerHTML = "";
    updateTaskCount();
});