const areaContent=document.getElementById("text-area-content");
const noteSaveSection=document.getElementById("note-list");
const deleteBtn=document.getElementById("delete-btn");
const newNoteBtn=document.getElementById("new-btn");
const saveBtn=document.getElementById("save-btn");
const time=document.getElementById("date");


let saveText = document.createElement("p")
let noteArray=[];  
let myNote = null;


time.textContent=Date().substring(0, 25);


function save () {
    saveText.setAttribute('saveText');
    noteSaveSection.appendChild(saveText);
    saveText.textContent = textarea.value;
}


newNoteBtn.addEventListener('click', function(){
    areaContent.style.display = "none";
});


saveBtn.addEventListener("click", save);

