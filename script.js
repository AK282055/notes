const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML= localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
});

  /*  const notescontainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector(".btn");
    let notes=document.querySelectorAll(".input-box");

    createBtn.addEventListener("click", () => {
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        
        img.src = "delete.png";
        img.className = "delete-btn"; // optional: easier to style later
        
        inputBox.appendChild(img); // append the image inside the p tag
        notescontainer.appendChild(inputBox);
    });*/

