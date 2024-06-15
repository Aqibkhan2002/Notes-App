let btn=document.querySelector(".button")
let notesContainer=document.querySelector(".notesContainer")

btn.addEventListener("click",addNote)

function addNote()
{
    let div=document.createElement("div")
    div.classList.add("sm:w-[30%]","w-[47%]","min-w-[150px]", "min-h-40", "bg-white","relative","noteDiv","outline-none")
    div.setAttribute("contentEditable","plaintext-only")

    let img=document.createElement("img")
    img.setAttribute("src","././images/delete.png")
    img.classList.add("h-4","absolute","bottom-2","right-2","delete","cursor-pointer")
    div.appendChild(img)
    notesContainer.appendChild(div)
    saveToLocalStorage()

}
notesContainer.addEventListener("input", saveToLocalStorage);

notesContainer.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.remove();
        saveToLocalStorage()
    }
   
});

function saveToLocalStorage() {
    let items = [];
    notesContainer.querySelectorAll(".noteDiv").forEach(note => {
        items.push(note.innerHTML);
    });
    localStorage.setItem("notes", JSON.stringify(items));
}

function showData() {
    let items = JSON.parse(localStorage.getItem("notes")) || [];
    items.forEach(noteContent => {
        let div = document.createElement("div");
        div.classList.add("sm:w-[30%]", "w-[47%]", "min-w-[150px]", "min-h-40", "bg-white", "relative", "noteDiv", "outline-none");
        div.setAttribute("contentEditable", "plaintext-only");
        div.innerHTML = noteContent;
        let img = document.createElement("img");
        img.setAttribute("src", "././images/delete.png");
        img.classList.add("h-4", "absolute", "bottom-2", "right-2", "delete", "cursor-pointer");
        div.appendChild(img);
        notesContainer.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", showData);