// Select DOM elements
const input = document.querySelector("#userName");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#nameList");

const clearBtn = document.querySelector("#clearBtn");
const lengthDisplay = document.querySelector("#storageLength"); // Display element for length

// Constructor function with unique ID fix
function PersonData(name) {
    this.name = name;
    this.id = Date.now() + Math.random(); 
}

//  getItem()
let peopleArray = JSON.parse(localStorage.getItem("key")) || [];

//  setItem() 
function saveToLocalStorage() {
    localStorage.setItem("key", JSON.stringify(peopleArray));
    updateStorageDisplay();
}

// Update UI length display
function updateStorageDisplay() {
    lengthDisplay.textContent = peopleArray.length;

    //  key(index)
    if (localStorage.length > 0) {
        const firstKeyName = localStorage.key(0);
    }
}

//  Display current storage contents
function renderData(personObj) {
    const listItem = document.createElement("li");
    const nameText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    nameText.textContent = personObj.name;
    deleteBtn.textContent = "Remove";

    listItem.appendChild(nameText);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    //  removeItem() 
    deleteBtn.addEventListener("click", () => {
        list.removeChild(listItem);
        peopleArray = peopleArray.filter(person => person.id !== personObj.id);
        
        if (peopleArray.length === 0) {
            localStorage.removeItem("key"); //  removeItem()
        } else {
            saveToLocalStorage();
        }

        updateStorageDisplay(); // Update length display on remove
    });
}

// Initial render & update length on page load
peopleArray.forEach(person => renderData(person));
updateStorageDisplay();

// Add new item listener
button.addEventListener("click", (event) => {
    event.preventDefault(); 
    
    const myNameText = input.value.trim();
    if (myNameText === "") return;

    input.value = "";
    const newPerson = new PersonData(myNameText);
    peopleArray.push(newPerson);
    
    saveToLocalStorage();
    renderData(newPerson);
});

//  clear() - Clear all storage for current origin
if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        localStorage.clear(); // Wipes out all localStorage items
        peopleArray = [];
        list.innerHTML = "";
        updateStorageDisplay(); // Update length display on clear
    });
}