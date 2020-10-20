const areaContent=document.getElementById("text-area-content");
const noteSaveSection=document.getElementById("note-list");
const deleteBtn=document.getElementById("delete-btn");
const newNoteBtn=document.getElementById("new-btn");
const saveBtn=document.getElementById("save-btn");
const time=document.getElementById("date");

let noteArray=[];  
let myNote = null;
let id=0;
let curentTargetId = null;


time.innerHTML=Date().substring(0, 25);


function deleteElement(){
   const element=document.getElementById(curentTargetId);
   element.remove();
   curentTargetId = null;
}


function editNote(event){
    curentTargetId=event.currentTarget.id;
    areaContent.value = event.currentTarget.children[1].textContent;
}


// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     const saveText = document.createElement("p"); 

//     const span = document.createElement("span");
//     saveText.appendChild(title);
//     saveText.appendChild(saveText);
//     document.getElementById("span").innerHTML = t;
//   }
  

function save() {
    if(curentTargetId !== null){
        deleteElement();
    }

    let line = areaContent.value.split('\n')[0];
    let title = document.createElement("h2");
    title.innerHTML=line;

    const saveText = document.createElement("p"); 

    const liElement=document.createElement("li");
    liElement.appendChild(title);
    liElement.appendChild(saveText);
    
    noteSaveSection.appendChild(liElement);
    saveText.textContent = areaContent.value;
    liElement.setAttribute("id", id);
    id++;
    liElement.addEventListener("click", editNote);
    areaContent.value = "";
}


newNoteBtn.addEventListener('click', function(){
    areaContent.style.display = "block"; 
    areaContent.value=""; 
    curentTargetId = null;
});


saveBtn.addEventListener("click", save);
deleteBtn.addEventListener("click", deleteElement);
